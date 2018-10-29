import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IAppState } from '@root/store/reducers';
import { Store, select } from '@ngrx/store';
import { getResultadosOfPais } from '@root/store/selectors/resultados.selector';
import { map, tap, filter, take } from 'rxjs/operators';
import { ResultadosGet } from '@root/store/actions/resultados.actions';
import { LocalidadeService } from 'app/shared/localidade';

@Injectable({
  providedIn: 'root'
})
export class ResultadosGuard implements CanActivate {
  constructor(
    private localidadeService: LocalidadeService,
    private store: Store<IAppState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const slug = route.params.pais;
    const { sigla } = this.localidadeService.getPaisBySlug(slug);
    return this.hasResultados(sigla);
  }

  hasResultados(sigla: string): Observable<boolean> {
    return this.store.pipe(
      select(getResultadosOfPais),
      map(resultados => !!resultados),
      tap(hasResultados => {
        if (!hasResultados) {
          this.store.dispatch(new ResultadosGet([sigla]));
        }
      }),
      filter(Boolean),
      take(1)
    );
  }
}
