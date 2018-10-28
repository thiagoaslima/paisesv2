import { ISintese } from 'app/shared/paises/models';
import {
  SinteseActions,
  SinteseSuccess,
  SinteseLoading
} from '../actions/sintese.actions';

export interface ISinteseState {
  loading: string | null;
  values: { [slug: string]: ISintese | null };
}

export const initialState = {
  loading: null,
  values: {}
};

export function sinteseReducer(state = initialState, action: SinteseActions) {
  switch (action.type) {
    case SinteseLoading.type:
      return {
        ...state,
        loading: action.payload
      };

    case SinteseSuccess.type: {
      const valores = Object.keys(action.payload).length > 2 ? action.payload : null;
      const values = { ...state.values, [action.payload.slug]: valores };
      return {
        ...state,
        loading: null,
        values
      };
    }

    default:
      return state;
  }
}
