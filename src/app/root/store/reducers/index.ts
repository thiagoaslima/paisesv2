import { Params } from '@angular/router';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { ICoreState, coreReducer } from './core.reducer';
import { ISinteseState, sinteseReducer } from './sintese.reducer';
import { IIndicadoresState, indicadoresReducer } from './indicadores.reducer';
import { resultadosReducer, IResultadoState } from './resultados.reducer';

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
  indicadores: IIndicadoresState;
  resultados: IResultadoState;
}

export const reducers: ActionReducerMap<IAppState> = {
  routerReducer: fromRouter.routerReducer,
  core: coreReducer,
  sintese: sinteseReducer,
  indicadores: indicadoresReducer,
  resultados: resultadosReducer
};
