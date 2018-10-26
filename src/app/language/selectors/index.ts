import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILanguageState, LANGUAGE } from '../reducers';

export const getLanguageState = createFeatureSelector<ILanguageState>(
  'language'
);

export const getCurrentLanguage = createSelector(
  getLanguageState,
  state => state.current
);

export const getLocales = createSelector(
  getLanguageState,
  state => state.locales
);

export const getModuleLocale = (module: string) =>
  createSelector(getLocales, state => state[module]);

export const getComponentLocale = (module: string, component: string) =>
  createSelector(
    getModuleLocale(module),
    getCurrentLanguage,
    (state, language) => {
      const localesPt = state[component][LANGUAGE.portugues];

      if (language === LANGUAGE.portugues) {
        return localesPt;
      }

      return { ...localesPt, ...state[component][language] };
    }
  );
