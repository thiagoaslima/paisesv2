import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IIndicadoresState } from '../reducers/indicadores.reducer';
import { TemaId } from 'app/shared/paises/paises.service';

export const getIndicadoresState = createFeatureSelector<IIndicadoresState>(
  'indicadores'
);

export const isIndicadoresLoading = createSelector(
  getIndicadoresState,
  state => state.loading
);
export const isIndicadoresLoaded = createSelector(
  getIndicadoresState,
  state => state.loaded
);
export const getIndicadores = createSelector(
  getIndicadoresState,
  state => state.values
);
export const getTemas = createSelector(
  getIndicadoresState,
  state => state.temas
);

export const getTemasByTemaName = createSelector(
  getTemas,
  temas => {
    return {
      economia: temas[TemaId.economia],
      ambiente: temas[TemaId.ambiente],
      saude: temas[TemaId.saude],
      sociais: temas[TemaId.sociais],
      redes: temas[TemaId.telefonia],
      populacao: [TemaId.populacao],
    };
  }
);

export const getTema = (temaId: string) =>
  createSelector(getTemas, temas => (temas ? temas[temaId] : null));

export const getIndicadoresTema = (temaId: string) =>
  createSelector(
    getTema(temaId),
    getIndicadores,
    (tema, indicadores) =>
      tema ? tema.indicadores.map(id => indicadores[id]) : []
  );
