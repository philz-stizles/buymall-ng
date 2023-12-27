import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { BehaviorSubject, catchError, map, take, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../core/services/local-storage.service';

interface UserCredentials {
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

enum AuthKeys {
  UserStore = 'buymall-ng:user',
}

@Injectable()
export class AuthService {
  baseUrl: string = environment.authBaseUrl;
  user = new BehaviorSubject<User | null>(null);
  tokenExpirationTimeout: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  signUp = (credentials: UserCredentials) => {
    return this.http
      .post<AuthResponse>(
        `${environment.authBaseUrl.replace('[END_POINT]', 'signUp')}`,
        {
          ...credentials,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError), tap(this.handleAuthentication));
  };

  signIn = (credentials: UserCredentials) => {
    return this.http
      .post<AuthResponse>(
        `${environment.authBaseUrl.replace(
          '[END_POINT]',
          'signInWithPassword'
        )}`,
        {
          ...credentials,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError), tap(this.handleAuthentication));
  };

  autoSignIn = () => {
    const storedUser = this.localStorage.getData<User>(AuthKeys.UserStore);
    console.log(storedUser);
    if (!storedUser) {
      return;
    }

    const tokenExpirationDateString = storedUser._tokenExpirationDate; // The _tokenExpirationDate
    // was converted to a Date string when user data was stringified to localStorage
    const tokenExpirationDate = new Date(tokenExpirationDateString);

    const existingUser = new User(
      storedUser?.id,
      storedUser?.email,
      storedUser?._token,
      tokenExpirationDate
    );

    if (existingUser._token) {
      // Store existing user in App context.
      this.user.next(existingUser);

      // configure setAutoSignOut.
      const expiresInMilliseconds =
        tokenExpirationDate.getTime() - new Date().getTime();
      this.setAutoSignOut(expiresInMilliseconds);
    }
  };

  signOut = () => {
    // Remove user from App context.
    this.user.next(null);

    // Remove user from LocalStorage.
    this.localStorage.removeData(AuthKeys.UserStore);

    // Redirect to Auth Page.
    this.router.navigate(['/auth']);

    // Clear TokenExpirationTimeout.
    if (this.tokenExpirationTimeout) {
      clearTimeout(this.tokenExpirationTimeout);
    }
  };

  private setAutoSignOut = (expiresInMs: number) => {
    this.tokenExpirationTimeout = setTimeout(this.signOut, expiresInMs);
  };

  private handleAuthentication = (response: AuthResponse) => {
    console.log(response);
    const expiresInMilliseconds = +response.expiresIn * 1000; // since response.expiresIn is in seconds
    const now = new Date();
    const tokenExpirationDate = new Date(
      now.setTime(now.getTime() + expiresInMilliseconds)
    );

    const user = new User(
      response.localId,
      response.email,
      response.idToken,
      tokenExpirationDate
    );

    // store user in App context.
    this.user.next(user);

    // configure setAutoSignOut.
    this.setAutoSignOut(expiresInMilliseconds);

    // store user in LocalStorage.
    this.localStorage.saveData<User>(AuthKeys.UserStore, user);
  };

  private handleError = (err: HttpErrorResponse) => {
    console.log(err);
    return throwError(() => new Error(err.message));
  };

  canActivate() {
    return this.user.pipe(
      take(1),
      map((user) => {
        const isAuthenticated = !!user;
        if (isAuthenticated) {
          return true;
        }

        return this.router.createUrlTree(['/auth']);
      })
    );
  }
}
