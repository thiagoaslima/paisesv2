import { Action } from '@ngrx/store';
import { Pais } from 'app/shared/localidade';
import { IHistoricoPais } from 'app/shared/paises/models/HistoricoPais';

export enum CoreActionTypes {
  PAIS_LOADING = '[core] carregando dados pais',
  PAIS_SELECIONADO = '[core] novo pais selecionado',
  HISTORICO_GET = '[core] get historico',
  HISTORICO_SUCCESS = '[core] historico success',
  HISTORICO_FAIL = '[core] historico fail'
}

export class PaisLoading implements Action {
  static readonly type = CoreActionTypes.PAIS_LOADING;
  readonly type = CoreActionTypes.PAIS_LOADING;
  constructor(public payload: string) {}
}

export class PaisSelecionado implements Action {
  static readonly type = CoreActionTypes.PAIS_SELECIONADO;
  readonly type = CoreActionTypes.PAIS_SELECIONADO;
  constructor(public payload: Pais) {}
}

export class HistoricoGet implements Action {
  static readonly type = CoreActionTypes.HISTORICO_GET;
  readonly type = CoreActionTypes.HISTORICO_GET;
  constructor(public payload: string) {}
}

export class HistoricoSuccess implements Action {
  static readonly type = CoreActionTypes.HISTORICO_SUCCESS;
  readonly type = CoreActionTypes.HISTORICO_SUCCESS;
  constructor(public payload: { [sigla: string]: IHistoricoPais }) {}
}

export class HistoricoFail implements Action {
  static readonly type = CoreActionTypes.HISTORICO_FAIL;
  readonly type = CoreActionTypes.HISTORICO_FAIL;
  constructor(public payload: Error) {}
}

export type CoreActions =
  | PaisSelecionado
  | HistoricoGet
  | HistoricoSuccess
  | HistoricoFail;
