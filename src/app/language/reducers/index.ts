import { IAppState as _IAppState } from '@root/store/reducers';
import { homeModuleTranslation } from 'app/home/translation';
import {
  ChangeLanguage,
  BarraMenuActions
} from '@root/barra-menu-principal/store/actions';
import { coreModuleTranslation } from 'app/core/translation';
import { mapaModuleTranslation } from 'app/mapa/translation';
import { dadospaisModuleTranslation } from 'app/dados-pais/translation';

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
  translation: { [module: string]: ILanguageLocale };
}

export interface IAppState extends _IAppState {
  language: ILanguageState;
}

const initialState: ILanguageState = {
  current: LANGUAGE.portugues,
  translation: {
    home: homeModuleTranslation,
    core: coreModuleTranslation,
    mapa: mapaModuleTranslation,
    dadospais: dadospaisModuleTranslation
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
