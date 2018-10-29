import {
  PaisSelecionado,
  CoreActions,
  HistoricoSuccess,
  PaisesSuccess
} from '../actions/core.actions';
import { Pais } from 'app/shared/localidade';
import { IHistoricoPais } from 'app/shared/paises/models/HistoricoPais';

export interface ICoreState {
  pais: Pais;
  paises: Pais[];
  historicos: { [sigla: string]: IHistoricoPais };
}

const initialState: ICoreState = {
  pais: null,
  paises: [],
  historicos: {}
};

export function coreReducer(state = initialState, action: CoreActions) {
  switch (action.type) {
    case PaisesSuccess.type:
      return {
        ...state,
        paises: action.payload
      };

    case PaisSelecionado.type:
      return {
        ...state,
        pais: action.payload
      };

    case HistoricoSuccess.type: {
      return {
        ...state,
        historicos: { ...state.historicos, ...action.payload }
      };
    }

    default:
      return state;
  }
}
