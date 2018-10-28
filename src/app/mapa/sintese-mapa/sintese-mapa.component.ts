import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IAppState } from '../store/reducers';
import { Store, select } from '@ngrx/store';
import { getSinteseValues, isSinteseLoading } from '@root/store/selectors/sintese.selectors';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { getPais } from '@root/store/selectors/core.selector';
import { Translate } from '@lang/decorator/Translate.decorator';

@Component({
  selector: 'sintese-mapa',
  templateUrl: './sintese-mapa.component.html',
  styleUrls: ['./sintese-mapa.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Translate({
  module: 'mapa',
  component: 'sintesemapa',
  shouldMark: true
})
export class SinteseMapaComponent {
  sintese$ = combineLatest(
    this.store.pipe(select(getSinteseValues)),
    this.store.pipe(select(getPais)),
    this.store.pipe(select(isSinteseLoading)),
  ).pipe(
    map(([values, pais, isLoading]) => {
      const valores = values && pais ? values[pais.slug] : {};
      const imageSrc = pais
        ? 'assets/img/bandeiras/' + pais.sigla.toUpperCase() + '.gif'
        : '';
      return { values: valores, pais, imageSrc, isLoading };
    })
  );

  constructor(
    private store: Store<IAppState>,
    private cdr: ChangeDetectorRef
  ) {}
}
