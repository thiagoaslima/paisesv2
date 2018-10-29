import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import { Pais } from 'app/shared/localidade';

@Component({
  selector: 'paises-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  graficoAtual = 0;
  cardAberto = false;
  mostrarTabela = false;

  @Input()
  pais: Pais;

  @Input() tema;

  @Input()
  titulo = '';

  @Input()
  dados: Array<{
    id: number;
    nome: string;
    unidade: string;
    periodos: string[];
    valores: string[];
  }> = [];

  constructor(private cdr: ChangeDetectorRef) {}

  setGrafico(index: number) {
    this.graficoAtual = index;
  }

  getTextoFonte(fonte: any) {
    if (fonte) {
      return fonte.split('Disponível em:')[0];
    }
    return '';
  }

  getLinkFonte(fonte: any) {
    if (fonte) {
      const link = fonte
        .split('Disponível em:')[1]
        .split('Acesso em:')[0]
        .replace('<', '')
        .replace('>.', '')
        .trim();
      return link;
    }
    return '';
  }
}
