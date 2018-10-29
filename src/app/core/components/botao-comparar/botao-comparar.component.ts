import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { Translate } from '@lang/decorator/Translate.decorator';
import { IAppState } from '@root/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'botao-comparar',
  templateUrl: './botao-comparar.component.html',
  styleUrls: ['./botao-comparar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Translate({
  module: 'core',
  shouldMark: true
})
export class BotaoCompararComponent {
  // marcadores texto
  TEXTO_COMPARAR = '';
  TEXTO_MAPA = '';

  @Input()
  href: string;

  @Input()
  queryParams: Object;

  @Input()
  type: 'comparar' | 'mapa' = 'comparar';

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<IAppState>
  ) {}
}
