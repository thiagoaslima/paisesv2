import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILanguageState, LANGUAGE } from '../reducers';

export const getLanguageState = createFeatureSelector<ILanguageState>(
  'language'
);

export const getCurrentLanguage = createSelector(
  getLanguageState,
  state => state.current
);

export const getTranslation = createSelector(
  getLanguageState,
  state => state.translation
);

export const getModuleTranslation = (module: string) =>
  createSelector(getTranslation, state => state[module]);

export const getComponentTranslation = (module: string, component: string) =>
  createSelector(
    getModuleTranslation(module),
    getCurrentLanguage,
    (state, language) => {
      const localesPt = state[component][LANGUAGE.portugues];

      if (language === LANGUAGE.portugues) {
        return localesPt;
      }

      return { ...localesPt, ...state[component][language] };
    }
  );
