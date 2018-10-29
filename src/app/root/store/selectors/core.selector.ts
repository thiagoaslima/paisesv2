import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICoreState } from '../reducers/core.reducer';
import { getCurrentLanguage } from '@lang/selectors';

export const getCoreState = createFeatureSelector<ICoreState>('core');

export const getPais = createSelector(
  getCoreState,
  getCurrentLanguage,
  (state, language) => {
    return state.pais
      ? { ...state.pais, nome: state.pais.nomes[language], currentSlug: state.pais.slugs[language] }
      : null;
  }
);

export const getPaises = createSelector(
  getCoreState,
  getCurrentLanguage,
  (state, language) => {
    return state.paises
      .map(pais => ({ ...pais, nome: pais.nomes[language], currentSlug: pais.slugs[language] }))
      .sort((a, b) => (a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0));
  }
);

export const getHistoricos = createSelector(
  getCoreState,
  state => state.historicos
);

export const getCurrentHistorico = createSelector(
  getPais,
  getHistoricos,
  getCurrentLanguage,
  (pais, historicos, idioma) => {
    return historicos[pais.sigla] ? historicos[pais.sigla][idioma] : null;
  }
);
