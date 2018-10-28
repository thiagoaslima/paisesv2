import {
  PaisSelecionado,
  CoreActions,
  HistoricoSuccess
} from '../actions/core.actions';
import { Pais } from 'app/shared/localidade';
import { IHistoricoPais } from 'app/shared/paises/models/HistoricoPais';

export interface ICoreState {
  pais: Pais;
  historicos: { [sigla: string]: IHistoricoPais };
}

const initialState: ICoreState = {
  pais: null,
  historicos: {}
};

export function coreReducer(state = initialState, action: CoreActions) {
  switch (action.type) {
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
