import { Params } from '@angular/router';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '@env/environment';

export interface IRouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  data: { [key: string]: any };
}

export interface IAppState {
  routerReducer: fromRouter.RouterReducerState<IRouterStateUrl>;
}

export const reducers: ActionReducerMap<IAppState> = {
  routerReducer: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
