import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { IAppState } from '../store/reducers';
import { Store } from '@ngrx/store';
import { PaisesService } from 'app/shared/paises/paises.service';
import {
  getSinteseValues,
  isSinteseLoading
} from '@root/store/selectors/sintese.selectors';
import { Observable, of, combineLatest } from 'rxjs';
import { tap, filter, take, map } from 'rxjs/operators';
import { ISintese } from 'app/shared/paises/models';
import { SinteseLoading } from '@root/store/actions/sintese.actions';
import { LocalidadeService } from 'app/shared/localidade';

@Injectable()
export class SinteseMapaGuard implements CanActivate {
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
    return this.hasSintesePais(slug, sigla);
  }

  hasSintesePais(slug: string, sigla: string): Observable<boolean> {
    return combineLatest(
      this.store.select(getSinteseValues),
      this.store.select(isSinteseLoading)
    ).pipe(
      map(([entities, isLoading]) => ({
        hasSintese: entities.hasOwnProperty(slug),
        isLoading: isLoading === sigla
      })),
      tap(obj => {
        if (!obj.hasSintese && !obj.isLoading) {
          this.store.dispatch(new SinteseLoading(sigla));
        }
      }),
      map(obj => obj.hasSintese),
      filter(Boolean),
      take(1)
    );
  }
}
