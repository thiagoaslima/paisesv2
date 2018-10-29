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
