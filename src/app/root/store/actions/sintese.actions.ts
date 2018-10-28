import { ISintese } from 'app/shared/paises/models';

export enum SinteseActionTypes {
  SINTESE_LOADING = '[sintese] loading sintese',
  SINTESE_SUCCESS = '[sintese] sintese success',
  SINTESE_FAIL = '[sintese] sintese fail'
}

export class SinteseLoading {
  static readonly type = SinteseActionTypes.SINTESE_LOADING;
  readonly type = SinteseActionTypes.SINTESE_LOADING;
  constructor(public payload: string) {}
}
export class SinteseSuccess {
  static readonly type = SinteseActionTypes.SINTESE_SUCCESS;
  readonly type = SinteseActionTypes.SINTESE_SUCCESS;
  constructor(public payload: ISintese) {}
}
export class SinteseFail {
  static readonly type = SinteseActionTypes.SINTESE_FAIL;
  readonly type = SinteseActionTypes.SINTESE_FAIL;
  constructor(public payload: Error) {}
}

export type SinteseActions = SinteseLoading | SinteseSuccess | SinteseFail;
