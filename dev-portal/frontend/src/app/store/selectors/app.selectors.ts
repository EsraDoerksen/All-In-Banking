import { createSelector } from '@ngrx/store';
import { State } from '../state/app.state';

export const selectAppState = (state: State) => state.app;

export const selectCount = createSelector(
  selectAppState,
  (appState) => appState.count
);

export const isUserLoggedIn = createSelector(
  selectAppState,
  (appState) => appState.isLoggedIn
)
