import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PaisesService } from 'app/shared/paises/paises.service';
import {
  IndicadoresGet,
  IndicadoresSuccess,
  IndicadoresFail
} from '../actions/indicadores.actions';
import { of } from 'rxjs';
import { flatMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class IndicadoresEffects {
  @Effect()
  getIndicadores = this.actions$.pipe(
    ofType<IndicadoresGet>(IndicadoresGet.type),
    flatMap(() => this.paisesService.getIndicadoresETemas()),
    map(
      ({ indicadores, temas }) => new IndicadoresSuccess({ indicadores, temas })
    ),
    catchError(err => of(new IndicadoresFail(err)))
  );

  constructor(
    private actions$: Actions,
    private paisesService: PaisesService
  ) {}
}
