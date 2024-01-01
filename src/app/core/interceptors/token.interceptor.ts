import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (req.url.startsWith(environment.baseUrl) && user && user.token) {
          const newRequest = req.clone({
            // setHeaders: {
            //   Authorization: `Bearer ${user.token}`,
            // },
            params: req.params.append('auth', user.token), // As in queryParams. ?auth=ANVHFYTOSN
          });

          return next.handle(newRequest);
        }
        return next.handle(req);
      })
    );
  }
}
