import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalidadeService } from 'app/shared/localidade';
import { IAppState } from '@root/store/reducers';
import { Store, select } from '@ngrx/store';
import { getResultados } from '@root/store/selectors/resultados.selector';
import { map, tap, filter, take } from 'rxjs/operators';
import { ResultadosGet } from '@root/store/actions/resultados.actions';

@Injectable({
  providedIn: 'root'
})
export class ResultadosCompararGuard implements CanActivate {
  constructor(
    private store: Store<IAppState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const siglas = route.queryParams.paises ? route.queryParams.paises.split(',').map(sigla => sigla.trim()) : [];
    return this.hasResultados(siglas);
  }

  hasResultados(siglas: string[]): Observable<boolean> {
    return this.store.pipe(
      select(getResultados),
      map(resultados => siglas.filter(sigla => !resultados[sigla])),
      tap(semResultados => {
        if (semResultados.length > 0) {
          this.store.dispatch(new ResultadosGet(semResultados));
        }
      }),
      map(semResultados => semResultados.length === 0),
      filter(Boolean),
      take(1)
    );
  }

}
