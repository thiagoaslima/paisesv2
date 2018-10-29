import { IResultadoState } from '../reducers/resultados.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getPais } from './core.selector';

export const getResultadosState = createFeatureSelector<IResultadoState>(
  'resultados'
);

export const getResultados = createSelector(
  getResultadosState,
  state => state.values
);

export const getResultadosOfPais = createSelector(
  getResultados,
  getPais,
  (resultados, pais) => {
    return resultados && pais
      ? resultados[pais.sigla]
        ? resultados[pais.sigla]
        : null
      : null;
  }
);

export const getResultado = (indicadorId: number) =>
  createSelector(
    getResultadosOfPais,
    resultados => (resultados ? resultados[indicadorId] : null)
  );
