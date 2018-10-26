import { IMapaState } from '../reducers';
import { createFeatureSelector } from '@ngrx/store';

export const getMapaState = createFeatureSelector<IMapaState>('mapa');
