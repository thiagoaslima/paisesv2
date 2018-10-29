import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { IRouterStateUrl } from '../reducers';

export const getRouterState = createFeatureSelector<
    fromRouter.RouterReducerState<IRouterStateUrl>
>('routerReducer');

export const getQueryParams = createSelector(
    getRouterState,
    route => route.state.queryParams
);
