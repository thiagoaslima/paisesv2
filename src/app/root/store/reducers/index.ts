import { Params } from '@angular/router';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '@env/environment';
import { ICoreState, coreReducer } from './core.reducer';
import { ISinteseState, sinteseReducer } from './sintese.reducer';

export interface IRouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  data: { [key: string]: any };
}

export interface IAppState {
  routerReducer: fromRouter.RouterReducerState<IRouterStateUrl>;
  core: ICoreState;
  sintese: ISinteseState;
}

export const reducers: ActionReducerMap<IAppState> = {
  routerReducer: fromRouter.routerReducer,
  core: coreReducer,
  sintese: sinteseReducer,
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
