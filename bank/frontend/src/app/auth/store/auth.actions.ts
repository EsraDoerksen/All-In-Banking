import { createAction, props } from '@ngrx/store';

export const setAccessToken = createAction('[Auth] Set accessToken', props<{ accessToken: string }>());
export const clearAccessToken = createAction('[Auth] Clear accessToken');
export const checkAuth = createAction('[Auth] Check Auth');
