import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISinteseState } from '../reducers/sintese.reducer';

export const getSinteseState = createFeatureSelector<ISinteseState>('sintese');

export const isSinteseLoading = createSelector(
  getSinteseState,
  state => state.loading
);

export const getSinteseValues = createSelector(
  getSinteseState,
  state => {
      return state.values;
  }
);
