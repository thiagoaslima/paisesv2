import { Action } from '@ngrx/store';
import { Pais } from 'app/shared/localidade';

export enum CoreActionTypes {
  PAIS_LOADING = '[core] carregando dados pais',
  PAIS_SELECIONADO = '[core] novo pais selecionado'
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

export type CoreActions = PaisSelecionado;
