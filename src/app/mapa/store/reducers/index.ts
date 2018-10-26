import { IAppState as _IAppState } from '@root/store/reducers';
import { Action } from '@ngrx/store';

import * as TOPOJSON from 'topojson';
import { FeatureCollection } from 'geojson';
import { topojson as mapaPaises } from '../../paises3.topojson';

export interface IMapaState {
  malha: FeatureCollection;
}

export interface IAppState extends _IAppState {
  mapa: IMapaState;
}

const initialState: IMapaState = {
  malha: TOPOJSON.feature(mapaPaises, mapaPaises.objects.countries)
};

export function mapaReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
