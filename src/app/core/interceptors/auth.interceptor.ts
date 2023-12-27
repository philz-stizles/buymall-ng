import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from '../../modules/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user || !user.token) {
          return next.handle(req);
        }

        const newRequest = req.clone({
          // setHeaders: {
          //   Authorization: `Bearer ${user.token}`,
          // },
          params: req.params.append('auth', user.token), // As in queryParams. ?auth=ANVHFYTOSN
        });

        return next.handle(newRequest);
      })
    );
  }
}
