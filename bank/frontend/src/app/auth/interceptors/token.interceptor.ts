import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { first, mergeMap, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAccessToken } from '../store/auth.selectors';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private readonly store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getAccessToken).pipe(
      first(),
      mergeMap((accessToken) => {
        const authReq = !!accessToken
          ? req.clone({
            setHeaders: { Authorization: `Bearer ${accessToken}` },
          })
          : req;
        return next.handle(authReq);
      }),
    );
  }
}
