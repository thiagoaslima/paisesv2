import { Action } from '@ngrx/store';
import { PaisSelecionado, CoreActions } from '../actions/core.actions';

export interface ICoreState {
  pais: any;
}

const initialState: ICoreState = {
  pais: null
};

export function coreReducer(state = initialState, action: CoreActions) {
  switch (action.type) {
    case PaisSelecionado.type:
      return {
        ...state,
        pais: action.payload
      };

    default:
      return state;
  }
}
