import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import { IHistoricoPais } from 'app/shared/paises/models/HistoricoPais';
import { IAppState } from '@root/store/reducers';
import { Store } from '@ngrx/store';
import { Translate } from '@lang/decorator/Translate.decorator';

@Component({
  selector: 'paises-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Translate({
  module: 'dadospais',
  shouldMark: true
})
export class HistoricoComponent {
  historico_aberto = false;

  // texto da view
  HISTORICO = '';
  TEXTO_MAIS = '';
  TEXTO_MENOS = '';

  @Input()
  historico: {
    texto?: string[];
    links?: string[];
  } = {};


  constructor(
    private store: Store<IAppState>,
    private cdr: ChangeDetectorRef
  ) {}
}
