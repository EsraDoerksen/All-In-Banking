import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth-state.model';

const getAuthState = createFeatureSelector<AuthState>('auth');

export const getAccessToken = createSelector(getAuthState, (state) => state.accessToken);
export const isUserLoggedIn = createSelector(getAccessToken, (accessToken) => !!accessToken);
