import {
  ResultadosSuccess,
  ResultadosActions
} from '../actions/resultados.actions';

export interface IResultadoStoreItem {
  [indicadorId: number]: { [periodo: string]: string | null };
}

export interface IResultadoState {
  values: {
    [sigla: string]: IResultadoStoreItem;
  };
}

const initialState: IResultadoState = {
  values: {}
};

export function resultadosReducer(
  state = initialState,
  action: ResultadosActions
) {
  switch (action.type) {
    case ResultadosSuccess.type:
      return {
        values: {
          ...state.values,
          ...action.payload
        }
      };

    default:
      return state;
  }
}
