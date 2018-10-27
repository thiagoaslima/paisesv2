import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICoreState } from '../reducers/core.reducer';

export const getCoreState = createFeatureSelector<
    ICoreState
>('core');

export const getPais = createSelector(getCoreState, state => state.pais);
