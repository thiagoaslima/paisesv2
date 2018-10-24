import { Action } from '@ngrx/store';

export enum BarraMenuTypeActions {
  CHANGE_LANGUAGE = '[barra-menu-principal] Change language'
}

export class ChangeLanguage implements Action {
  static readonly type = BarraMenuTypeActions.CHANGE_LANGUAGE;
  readonly type = BarraMenuTypeActions.CHANGE_LANGUAGE;
  constructor(public payload: string) {}
}

export type BarraMenuActions = ChangeLanguage;
