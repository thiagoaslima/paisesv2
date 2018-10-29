import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IIndicadoresState } from '../reducers/indicadores.reducer';

export const getIndicadoresState = createFeatureSelector<IIndicadoresState>(
  'indicadores'
);

export const isIndicadoresLoading = createSelector(
  getIndicadoresState,
  state => state.loading
);
export const isIndicadoresLoaded = createSelector(
  getIndicadoresState,
  state => state.loaded
);
export const getIndicadores = createSelector(
  getIndicadoresState,
  state => state.values
);
export const getTemas = createSelector(
  getIndicadoresState,
  state => state.temas
);

export const getTema = (temaId: string) =>
  createSelector(getTemas, temas => (temas ? temas[temaId] : null));
export const getIndicadoresTema = (temaId: string) =>
  createSelector(
    getTema(temaId),
    getIndicadores,
    (tema, indicadores) =>
      tema ? tema.indicadores.map(id => indicadores[id]) : []
  );
