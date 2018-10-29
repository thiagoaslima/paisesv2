import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LocalidadeService } from 'app/shared/localidade';
import {
  PaisLoading,
  PaisSelecionado,
  HistoricoGet,
  HistoricoSuccess,
  HistoricoFail,
  PaisesGet,
  PaisesSuccess
} from '../actions/core.actions';
import {
  combineLatest,
  map,
  switchMap,
  catchError,
  flatMap,
  filter
} from 'rxjs/operators';
import { of } from 'rxjs';
import { PaisesService } from 'app/shared/paises/paises.service';
import { IAppState } from 'app/mapa/store/reducers';
import { Store, select } from '@ngrx/store';
import { getPais } from '../selectors/core.selector';

@Injectable()
export class CoreEffects {
  @Effect()
  getPaises$ = this.actions$.pipe(
    ofType<PaisesGet>(PaisesGet.type),
    map(() => new PaisesSuccess(this.localidadeService.getAllPaises()))
  );

  @Effect()
  locationUpdate$ = this.actions$.pipe(
    ofType('ROUTER_NAVIGATION'),
    map(action => {
      // @ts-ignore
      return action.payload.routerState;
    }),
    combineLatest(this.store.pipe(select(getPais))),
    filter(([state, pais]) => !pais || !pais.slug || pais.slug !== state.params.pais),
    switchMap(([state, pais]) => {
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

  @Effect()
  getHistorico$ = this.actions$.pipe(
    ofType<HistoricoGet>(HistoricoGet.type),
    flatMap(({ payload }) =>
      this.paisesService.getHistorico(payload).pipe(
        map(historico => {
          const pt = historico.valor
            ? historico.valor
                .trim()
                .replace(/^<p>/, '')
                .replace(/<\/p>$/, '')
                .split('</p><p>')
            : [];
          const en = historico.valor_en
            ? historico.valor_en
                .trim()
                .replace(/^<p>/, '')
                .replace(/<\/p>$/, '')
                .split('</p><p>')
            : [];
          // @ts-ignore
          const es = historico.valor_es
            ? historico.valor_en
                .trim()
                .replace(/^<p>/, '')
                .replace(/<\/p>$/, '')
                .split('</p><p>')
            : [];

          const textoPt = [],
            linksPt = [];
          this.extractLinks(pt, textoPt, linksPt);
          const textoEn = [],
            linksEn = [];
          this.extractLinks(en, textoEn, linksEn);
          const textoEs = [],
            linksEs = [];
          this.extractLinks(es, textoEs, linksEs);

          return {
            [payload]: {
              pt: { texto: textoPt, links: linksPt },
              en: { texto: textoEn, links: linksEn },
              es: { texto: textoEs, links: linksEs }
            }
          };
        }),
        map(historico => new HistoricoSuccess(historico)),
        catchError(err => of(new HistoricoFail(err)))
      )
    )
  );

  private extractLinks(all: string[], texto: string[], links: string[]) {
    let i = all.length - 1;
    while (
      i >= 0 &&
      (all[i].indexOf('http') === 0 || all[i].indexOf('www.') === 0)
    ) {
      links.push(all.pop());
      i--;
    }
    texto.push(...all);
  }

  constructor(
    private actions$: Actions,
    private localidadeService: LocalidadeService,
    private paisesService: PaisesService,
    private store: Store<IAppState>
  ) {}
}
