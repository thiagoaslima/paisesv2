import { Action } from '@ngrx/store';
import { API } from 'app/shared/paises/models';
import { ITemaIndicadores } from 'app/shared/paises/models/TemaIndicadores';

export enum IndicadoresActionTypes {
  INDICADORES_GET = '[core] get indicadores',
  INDICADORES_SUCCESS = '[core] get indicadores success',
  INDICADORES_FAIL = '[core] get indicadores fail',
  TEMAS_SET = '[core] set temas'
}

export class IndicadoresGet implements Action {
  static readonly type = IndicadoresActionTypes.INDICADORES_GET;
  readonly type = IndicadoresActionTypes.INDICADORES_GET;
  constructor() {}
}
export class IndicadoresSuccess implements Action {
  static readonly type = IndicadoresActionTypes.INDICADORES_SUCCESS;
  readonly type = IndicadoresActionTypes.INDICADORES_SUCCESS;
  constructor(
    public payload: {
      indicadores: {[id: number]: API.Indicador};
      temas: { [posicao: string]: ITemaIndicadores };
    }
  ) {}
}
export class IndicadoresFail implements Action {
  static readonly type = IndicadoresActionTypes.INDICADORES_FAIL;
  readonly type = IndicadoresActionTypes.INDICADORES_FAIL;
  constructor(public payload: Error) {}
}

export type IndicadoresActions =
  | IndicadoresGet
  | IndicadoresSuccess
  | IndicadoresFail;
