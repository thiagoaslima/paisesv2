import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LocalidadeService } from 'app/shared/localidade';
import { PaisLoading, PaisSelecionado } from '../actions/core.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { ParamMap } from '@angular/router';

@Injectable()
export class CoreEffects {
  @Effect()
  locationUpdate$ = this.actions$.pipe(
    ofType('ROUTER_NAVIGATION'),
    map(action => {
      // @ts-ignore
      return action.payload.routerState;
    }),
    switchMap(state => {
      const { params } = state;
      return [new PaisLoading(params.pais)];
    })
  );

  @Effect()
  loadPais$ = this.actions$.pipe(
    ofType<PaisLoading>(PaisLoading.type),
    map(({ payload }) => this.localidadeService.getPaisBySlug(payload)),
    map(pais => new PaisSelecionado(pais)),
    catchError(_ => of(new PaisSelecionado(null)))
  );

  constructor(
    private actions$: Actions,
    private localidadeService: LocalidadeService
  ) {}
}
