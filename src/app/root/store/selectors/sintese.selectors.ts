import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISinteseState } from '../reducers/sintese.reducer';
import { getPais } from './core.selector';

export const getSinteseState = createFeatureSelector<ISinteseState>('sintese');

export const isSinteseLoading = createSelector(
  getSinteseState,
  state => state.loading
);

export const getSinteseValues = createSelector(
  getSinteseState,
  state => state.values
);

export const getSinteseCurrentPais = createSelector(
  getSinteseValues,
  getPais,
  (obj, pais) => (pais && obj ? obj[pais.slug] : null)
);
