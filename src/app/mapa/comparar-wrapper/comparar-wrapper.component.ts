import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IAppState } from '@lang/reducers';
import { Store, select } from '@ngrx/store';
import {
  getTemas,
  getIndicadoresTema
} from '@root/store/selectors/indicadores.selector';
import { getQueryParams } from '@root/store/selectors/router.selectors';
import { map, flatMap } from 'rxjs/operators';
import { Translate } from '@lang/decorator/Translate.decorator';
import { LocalidadeService } from 'app/shared/localidade';
import { getPaises } from '@root/store/selectors/core.selector';

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
export class CompararWrapperComponent implements OnInit {
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
    map(temas => Object.keys(temas).map(key => temas[key]))
  );

  indicadores$ = this.selecionados$.pipe(
    flatMap(({ tema }) => this.store.pipe(select(getIndicadoresTema(tema))))
  );

  paises$ = this.store.pipe(select(getPaises));

  constructor(
    private store: Store<IAppState>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}
}
