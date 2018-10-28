import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { PaisesService } from 'app/shared/paises/paises.service';
import {
  SinteseLoading,
  SinteseSuccess,
  SinteseFail
} from '../actions/sintese.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SinteseEffects {
  @Effect()
  getSintese$ = this.actions$.pipe(
    ofType<SinteseLoading>(SinteseLoading.type),
    switchMap(({ payload }) => {
      return this.paisesService.getSintese(payload).pipe(
        map(resp => {
          return new SinteseSuccess(resp);
        }),
        catchError(err => {
          return of(new SinteseFail(err));
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private paisesService: PaisesService
  ) {}
}
