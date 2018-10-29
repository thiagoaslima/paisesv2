import { API } from 'app/shared/paises/models';
import {
  IndicadoresGet,
  IndicadoresActions,
  IndicadoresSuccess,
  IndicadoresFail,
} from '../actions/indicadores.actions';
import { ITemaIndicadores } from 'app/shared/paises/models/TemaIndicadores';

export interface IIndicadoresState {
  loaded: boolean;
  loading: boolean;
  values: {[id: number]: API.Indicador};
  temas: { [posicao: string]: ITemaIndicadores };
}

const initialState: IIndicadoresState = {
  loaded: false,
  loading: false,
  values: {},
  temas: {}
};

export function indicadoresReducer(
  state = initialState,
  action: IndicadoresActions
) {
  switch (action.type) {
    case IndicadoresGet.type:
      return {
        ...state,
        loading: true
      };

    case IndicadoresSuccess.type:
      return {
        ...state,
        loading: false,
        loaded: true,
        values: action.payload.indicadores,
        temas: action.payload.temas
      };

    case IndicadoresFail.type:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    default:
      return state;
  }
}
