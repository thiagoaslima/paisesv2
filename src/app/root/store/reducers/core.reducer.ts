import { PaisSelecionado, CoreActions } from '../actions/core.actions';
import { Pais } from 'app/shared/localidade';

export interface ICoreState {
  pais: Pais;
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
