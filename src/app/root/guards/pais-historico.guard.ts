import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { IAppState } from '@root/store/reducers';
import { Store } from '@ngrx/store';
import { LocalidadeService } from 'app/shared/localidade';
import { getHistoricos } from '@root/store/selectors/core.selector';
import { map, filter, take, tap } from 'rxjs/operators';
import { HistoricoGet } from '@root/store/actions/core.actions';

@Injectable({
  providedIn: 'root'
})
export class PaisHistoricoGuard implements CanActivate {
  constructor(
    private localidadeService: LocalidadeService,
    private store: Store<IAppState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    _route: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const slug = route.params.pais;
    const { sigla } = this.localidadeService.getPaisBySlug(slug);
    return this.hasHistoricoPais(sigla);
  }

  hasHistoricoPais(sigla: string): Observable<boolean> {
    return this.store.select(getHistoricos).pipe(
      map(entities => entities.hasOwnProperty(sigla)),
      tap(hasHistorico => {
        if (!hasHistorico) {
          this.store.dispatch(new HistoricoGet(sigla));
        }
      }),
      filter(Boolean),
      take(1)
    );
  }
}
