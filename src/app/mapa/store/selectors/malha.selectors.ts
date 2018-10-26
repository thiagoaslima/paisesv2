import { getMapaState } from '.';
import { createSelector } from '@ngrx/store';

export const getMalha = createSelector(
    getMapaState,
    state => state.malha
);
