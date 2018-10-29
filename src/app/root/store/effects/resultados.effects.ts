import { Injectable } from '@angular/core';
import { PaisesService } from 'app/shared/paises/paises.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ResultadosGet,
  ResultadosSuccess,
  ResultadosFail
} from '../actions/resultados.actions';
import { flatMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ResultadosEffects {
  @Effect()
  getResultados$ = this.actions$.pipe(
    ofType<ResultadosGet>(ResultadosGet.type),
    flatMap(({ payload }) => this.paisesService.getResultados(payload)),
    map(response => {
      debugger;
      const resultados = {
        [response.localidade]: response.res.reduce(
          (agg, item) => ({ ...agg, [item.indicador]: item.res }),
          {}
        )
      };
      return resultados;
    }),
    map(resultados => new ResultadosSuccess(resultados)),
    catchError(err => of(new ResultadosFail(err)))
  );

  constructor(
    private actions$: Actions,
    private paisesService: PaisesService
  ) {}
}
