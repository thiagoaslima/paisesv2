import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IAppState } from '@root/store/reducers';
import { Store, select } from '@ngrx/store';
import { getPais, getCurrentHistorico } from '@root/store/selectors/core.selector';
import { combineLatest } from 'rxjs';
import {
  getSinteseCurrentPais
} from '@root/store/selectors/sintese.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dados-wrapper',
  templateUrl: './dados-wrapper.component.html',
  styleUrls: ['./dados-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DadosWrapperComponent {
  header$ = combineLatest(
    this.store.pipe(select(getPais)),
    this.store.pipe(select(getSinteseCurrentPais))
  ).pipe(map(([pais, sintese]) => ({ pais, sintese })));

  historico$ = this.store.pipe(select(getCurrentHistorico));

  constructor(private store: Store<IAppState>) {}
}
