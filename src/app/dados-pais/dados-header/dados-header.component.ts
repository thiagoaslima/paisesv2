import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '@root/store/reducers';
import { Pais } from 'app/shared/localidade';
import { ISintese } from 'app/shared/paises/models';
import { linksCapas } from './links-capas';
import { Translate } from '@lang/decorator/Translate.decorator';

@Component({
  selector: 'dados-header',
  templateUrl: './dados-header.component.html',
  styleUrls: ['./dados-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Translate({
  module: 'dadospais',
  shouldMark: true
})
export class DadosHeaderComponent {
  @Input()
  set dados({ pais, sintese }: { pais: Pais; sintese: ISintese }) {
    this.pais = pais || null;
    this.sintese = sintese || {} as ISintese;
    this.setBandeira(pais);
    this.setCapa(pais);
  }

  pais: Pais | null;
  sintese: ISintese;
  bandeiraSrc: string;
  capa: { src?: string; href?: string } = {};

  constructor(
    private store: Store<IAppState>,
    private cdr: ChangeDetectorRef
  ) {}

  setBandeira(pais: Pais) {
    this.bandeiraSrc =
      pais && pais.sigla
        ? `assets/img/bandeiras/${pais.sigla.toUpperCase()}.gif`
        : '';
  }

  setCapa(pais: Pais) {
    if (pais && pais.sigla) {
      const sigla = pais.sigla.toUpperCase();

      // decide qual capa usar para o país (randomicamente)
      // os links das capas começam com 1(não zero)
      const rand =
        Math.round((linksCapas[sigla].length - 1) * Math.random()) + 1;
      this.capa = {
        src: 'assets/img/capas/' + sigla + rand.toString() + '.jpg',
        href: linksCapas[sigla][rand - 1]
      };
    } else {
      this.capa = {
        src: '',
        href: ''
      };
    }
  }
}
