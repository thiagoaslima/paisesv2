import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { LocalidadeService } from 'app/shared/localidade';
import { Store, select } from '@ngrx/store';
import { getHistoricos } from '@root/store/selectors/core.selector';
import { map, tap, filter, take } from 'rxjs/operators';
import { HistoricoGet } from '@root/store/actions/core.actions';
import { IAppState } from '@root/store/reducers';
import {
  getIndicadores,
  isIndicadoresLoaded,
  isIndicadoresLoading
} from '@root/store/selectors/indicadores.selector';
import { IndicadoresGet } from '@root/store/actions/indicadores.actions';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresGuard implements CanActivate {
  constructor(private store: Store<IAppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasIndicadores();
  }

  hasIndicadores(): Observable<boolean> {
    return this.store.pipe(
      select(getIndicadores),
      map(indicadores => indicadores && Object.keys(indicadores).length > 0),
      tap(hasIndicadores => {
        if (!hasIndicadores) {
          this.store.dispatch(new IndicadoresGet());
        }
      }),
      filter(Boolean),
      take(1)
    );
  }
}
