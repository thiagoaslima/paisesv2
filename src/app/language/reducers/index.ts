import { IAppState as _IAppState } from '@root/store/reducers';
import { homeModuleLocales } from 'app/home/locales';
import {
  ChangeLanguage,
  BarraMenuActions
} from '@root/barra-menu-principal/store/actions';

export enum LANGUAGE {
  portugues = 'pt',
  ingles = 'en',
  espanhol = 'es'
}

export interface ILanguageLocale {
  [component: string]: { [language: string]: { [marker: string]: string } };
}

export interface ILanguageState {
  current: LANGUAGE;
  locales: { [module: string]: ILanguageLocale };
}

export interface IAppState extends _IAppState {
  language: ILanguageState;
}

const initialState: ILanguageState = {
  current: LANGUAGE.portugues,
  locales: {
    home: homeModuleLocales
  }
};

export function reducer(state = initialState, action: BarraMenuActions) {
  switch (action.type) {
    case ChangeLanguage.type:
      return {
        ...state,
        current: action.payload
      };

    default:
      return state;
  }
}
