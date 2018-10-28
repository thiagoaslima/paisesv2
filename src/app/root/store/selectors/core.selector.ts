import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICoreState } from '../reducers/core.reducer';
import { getCurrentLanguage } from '@lang/selectors';

export const getCoreState = createFeatureSelector<ICoreState>('core');

export const getPais = createSelector(
  getCoreState,
  getCurrentLanguage,
  (state, language) => {
    return { ...state.pais, nome: state.pais.nome[language] };
  }
);
