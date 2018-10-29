import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Translate } from '@lang/decorator/Translate.decorator';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@root/store/reducers';
import { TemaId } from 'app/shared/paises/paises.service';
import { getDadosCard } from '../store/selectors/card.selector';
import { getPais } from '@root/store/selectors/core.selector';
import { getTema, getTemas, getTemasByTemaName } from '@root/store/selectors/indicadores.selector';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dados-graficos',
  templateUrl: './dados-graficos.component.html',
  styleUrls: ['./dados-graficos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Translate({
  module: 'dadospais',
  shouldMark: true
})
export class DadosGraficosComponent {
  // marcadores de textos da view
  ECONOMIA = '';
  SOCIAIS = '';
  AMBIENTE = '';
  POPULACAO = '';
  REDES = '';
  SAUDE = '';

  pais$ = this.store.pipe(select(getPais));
  temas$ = this.store.pipe(select(getTemasByTemaName));
  economia$ = this.store.pipe(select(getDadosCard(TemaId.economia.toString(10))));
  sociais$ = this.store.pipe(select(getDadosCard(TemaId.sociais.toString(10))));
  ambiente$ = this.store.pipe(select(getDadosCard(TemaId.ambiente.toString(10))));
  populacao$ = this.store.pipe(select(getDadosCard(TemaId.populacao.toString(10))));
  redes$ = this.store.pipe(select(getDadosCard(TemaId.telefonia.toString(10))));
  saude$ = this.store.pipe(select(getDadosCard(TemaId.saude.toString(10))));

  constructor(
    private store: Store<IAppState>,
    private cdr: ChangeDetectorRef
  ) {}

}
