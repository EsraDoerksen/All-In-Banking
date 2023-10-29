import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AuthActions from './auth.actions';
//import { AuthService, RegisterService } from '../../core/services/generated';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions: Actions,
    private readonly router: Router,
    private readonly oidcSecurityService: OidcSecurityService,
    @Inject('localStorage') private readonly localStorage: Storage,
    @Inject('window') private readonly window: Window,
  ) {}

  /*checkAuth = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActions.checkAuth),
      tap(() => console.log('AuthActions.checkAuth triggered')),
      filter(() => !this.window.location.pathname.includes('conf')),
      switchMap(() => this.oidcSecurityService.checkAuthMultiple()),
      switchMap((loginResponses) => {
        const loginResponse = loginResponses.find((r) => r.isAuthenticated || r.userData);
        console.log("check");
        if (loginResponse) {
          console.log("Connected");
        } else {
          console.log("Not connectedd");
        }
        return [];
      }),
    ),
  );*/

}
