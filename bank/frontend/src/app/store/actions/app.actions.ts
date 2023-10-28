import { createAction } from '@ngrx/store';

export const increment = createAction('[App] Increment');
export const decrement = createAction('[App] Decrement');
export const login = createAction('[App] Login');
export const logout = createAction('[App] Logout');
export const getApps = createAction('[App] Get apps');
