import { createReducer, on } from '@ngrx/store';
import * as AppActions from '../actions/app.actions';

export interface AppState {
  count: number;
  isLoggedIn: boolean;
}

export const initialState: AppState = {
  count: 0,
  isLoggedIn: false,
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.increment, state => ({ ...state, count: state.count + 1 })),
  on(AppActions.decrement, state => ({ ...state, count: state.count - 1 })),
  on(AppActions.login, state => ({ ...state, isLoggedIn: true })),
  on(AppActions.logout, state => ({ ...state, isLoggedIn: false })),
);
