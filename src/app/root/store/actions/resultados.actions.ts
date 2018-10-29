import { Action } from '@ngrx/store';
import { IResultadoStoreItem } from '../reducers/resultados.reducer';

export enum ResultadosTypeActions {
  RESULTADOS_GET = '[core] get resultados',
  RESULTADOS_GET_SUCCESS = '[core] get resultados successed',
  RESULTADOS_GET_FAIL = '[core] get resultados failed'
}

export class ResultadosGet implements Action {
  static readonly type = ResultadosTypeActions.RESULTADOS_GET;
  readonly type = ResultadosTypeActions.RESULTADOS_GET;
  constructor(public payload: string[]) {}
}
export class ResultadosSuccess implements Action {
  static readonly type = ResultadosTypeActions.RESULTADOS_GET_SUCCESS;
  readonly type = ResultadosTypeActions.RESULTADOS_GET_SUCCESS;
  constructor(public payload: {[indicador: number]: IResultadoStoreItem}) {}
}
export class ResultadosFail implements Action {
  static readonly type = ResultadosTypeActions.RESULTADOS_GET_FAIL;
  readonly type = ResultadosTypeActions.RESULTADOS_GET_FAIL;
  constructor(public payload: Error) {}
}

export type ResultadosActions =
  | ResultadosGet
  | ResultadosSuccess
  | ResultadosFail;
