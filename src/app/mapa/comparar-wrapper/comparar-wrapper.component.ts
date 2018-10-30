import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { IAppState } from '@lang/reducers';
import { Store, select } from '@ngrx/store';
import {
  getTemas,
  getIndicadoresTema
} from '@root/store/selectors/indicadores.selector';
import { getQueryParams } from '@root/store/selectors/router.selectors';
import { map, flatMap, takeUntil, take } from 'rxjs/operators';
import { Translate } from '@lang/decorator/Translate.decorator';
import { getPaises } from '@root/store/selectors/core.selector';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { combineLatest } from 'rxjs/operators';

@Component({
  selector: 'paises-comparar-wrapper',
  templateUrl: './comparar-wrapper.component.html',
  styleUrls: ['./comparar-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Translate({
  module: 'mapa',
  component: 'comparar',
  shouldMark: true
})
export class CompararWrapperComponent implements OnInit, OnDestroy {
  TITULO_MODAL = '';

  selecionados$ = this.store.pipe(
    select(getQueryParams),
    map(queryParams => {
      const { indicador = 62962, tema = '3' } = queryParams;
      const paises = queryParams.paises
        ? queryParams.paises.split(',').map(sigla => sigla.trim())
        : [];
      return {
        indicador,
        tema,
        paises
      };
    })
  );

  temas$ = this.store.pipe(
    select(getTemas),
    map(temas =>
      Object.keys(temas).map(key => ({ value: key, texto: temas[key].nome }))
    )
  );

  indicadores$ = this.selecionados$.pipe(
    flatMap(({ tema }) => this.store.pipe(select(getIndicadoresTema(tema)))),
    map(indicadores =>
      indicadores.map(indicador => ({
        value: indicador.id,
        texto: indicador.indicador
      }))
    )
  );

  temaSelecionado$ = this.selecionados$.pipe(map(obj => ({ value: obj.tema })));
  indicadorSelecionado$ = this.selecionados$.pipe(
    map(obj => ({ value: obj.indicador }))
  );

  paises$ = this.store.pipe(select(getPaises));
  indicadorChange$ = new Subject<string>();
  temaChange$ = new Subject<string>();
  destroy$ = new Subject<void>();

  constructor(
    private store: Store<IAppState>,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.indicadorChange$
      .pipe(
        combineLatest(
          this.store.pipe(
            select(getQueryParams),
            take(1)
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(([sigla, params]) => {
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: {
            ...params,
            indicador: sigla
          }
        });
      });

    this.temaChange$
      .pipe(
        combineLatest(
          this.store.pipe(
            select(getQueryParams),
            take(1)
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(([sigla, params]) => {
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: {
            ...params,
            tema: sigla
          }
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  setIndicador(id: string) {
    this.indicadorChange$.next(id);
  }

  setTema(tema: string) {
    this.temaChange$.next(tema);
  }
}
