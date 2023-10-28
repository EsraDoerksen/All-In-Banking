import { Action, createReducer, on } from '@ngrx/store';

import { AuthState } from './auth-state.model';
import * as AuthActions from './auth.actions';

export const initialState: AuthState = {
  accessToken: null
};

const reducer = createReducer(
  initialState,
  on(AuthActions.setAccessToken, (state, { accessToken }) => ({
    ...state,
    accessToken,
  })),
  on(AuthActions.clearAccessToken, (state) => ({
    ...state,
    accessToken: null,
  })),
);

export function authReducer(state: AuthState | undefined, action: Action): any {
  return reducer(state, action);
}
