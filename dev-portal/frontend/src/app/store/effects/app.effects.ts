import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as AppActions from '../actions/app.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  logIncrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.increment),
      tap(() => console.log('Incremented!'))
    ), { dispatch: false }
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.login),
      tap(() => console.log('I just logged in!'))
    ), { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.logout),
      tap(() => console.log('I just loggout!'))
    ), { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
