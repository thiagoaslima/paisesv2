import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'paises-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraficoComponent {
  // POSICAO_EIXO_X = this.ALTURA_GRAFICO - 20;
  // ALTURA_AREA_DADOS = this.POSICAO_EIXO_X - this.OFFSET_TOPO; //altura da área usada para mostrar os pontos do gráfico
  OFFSET_TOPO = 10; // offset usado no topo para impedir que os pontos de valor máximo sejam clipados
  LARGURA_ROTULO = 28; // largura aproximada dos rótulos do eixo X
  ALTURA_ROTULO = 14; // largura aproximada dos rótulos do eixo X
  CHAR_WIDTH = 6;

  valor: any = null;
  metadata: any = null;
  indexSelecionado = -1;

  tooltip: any = null;

  @Input()
  rotulosX = [];

  @Input()
  rotulosY = [];

  @Input()
  dados = [[]];

  @Input()
  unidade = '';

  @Input()
  mostrarLegenda = false;

  @Input()
  LARGURA_GRAFICO = 320;
  @Input()
  ALTURA_GRAFICO = 180;

  get POSICAO_EIXO_X() {
    return this.ALTURA_GRAFICO - 20;
  }

  get ALTURA_AREA_DADOS() {
    // altura da área usada para mostrar os pontos do gráfico
    return this.POSICAO_EIXO_X - this.OFFSET_TOPO;
  }

  existemDados() {
    return (
      this.rotulosX &&
      this.rotulosX.length &&
      (this.rotulosY && this.rotulosY.length) &&
      (this.dados && this.dados.length) &&
      (this.dados[0] && this.dados[0].length)
    );
  }

  // calcula a posição X dos elementos e dos pontos do gráfico, distribuindo e centralizando-os.
  getX(indexX: any, largura: any) {
    if (!this.existemDados()) { return 0; }
    indexX = indexX >= this.rotulosX.length ? this.rotulosX.length - 1 : indexX;
    const parte = this.LARGURA_GRAFICO / this.rotulosX.length;
    return parte * indexX + parte / 2 - largura / 2;
  }

  // retorna o valor máximo dos dados informados
  getMax() {
    if (!this.existemDados()) { return 0; }
    let max: number = this.dados[0][0];
    for (let i = 0; i < this.dados.length; i++) {
      for (let j = 0; j < this.dados[i].length; j++) {
        if (i === 0 && j === 0) { max = this.dados[i][j]; }
        max = Math.max(
          <number>max,
          isNaN(this.dados[i][j]) ? <number>max : this.dados[i][j]
        );
      }
    }
    return max;
  }

  // retorna o valor mínimo dos dados informados
  getMin(): number {
    if (!this.existemDados()) { return 0; }
    let min: number = this.dados[0][0];
    for (let i = 0; i < this.dados.length; i++) {
      for (let j = 0; j < this.dados[i].length; j++) {
        if (i === 0 && j === 0) { min = this.dados[i][j]; }
        min = Math.min(min, isNaN(this.dados[i][j]) ? min : this.dados[i][j]);
      }
    }
    if (min > 0) { min = 0; }
    return min;
  }

  // calcula a posição y dos pontos do gráfico
  getY(indexX: any, indexY: any) {
    if (!this.existemDados()) { return 0; }
    indexX =
      indexX >= this.dados[indexY].length
        ? this.dados[indexY].length - 1
        : indexX;
    if (!this.dados[indexY][indexX]) { return 0; }
    return (
      this.ALTURA_AREA_DADOS -
      ((this.dados[indexY][indexX] - this.getMin()) /
        (this.getMax() - this.getMin())) *
        this.ALTURA_AREA_DADOS +
      this.OFFSET_TOPO
    );
  }

  // calcula a posição y do ponto mais alto do gráfico (usado para desenhar as linhas guias tracejadas)
  getMaxY(indexX: any) {
    if (!this.existemDados()) { return 0; }
    let max: number = this.dados[0][indexX];
    for (let i = 0; i < this.dados.length; i++) {
      if (i === 0) { max = this.dados[i][indexX]; }
      max = Math.max(
        max,
        isNaN(this.dados[i][indexX]) ? max : this.dados[i][indexX]
      );
    }
    return (
      this.ALTURA_AREA_DADOS -
      ((max - this.getMin()) / (this.getMax() - this.getMin())) *
        this.ALTURA_AREA_DADOS +
      this.OFFSET_TOPO
    );
  }

  valorValido(valor: any) {
    // console.log(valor);
    if (
      !this.existemDados() ||
      isNaN(valor) ||
      valor === 0 ||
      (valor === '99999999999991' ||
        valor === '99999999999992' ||
        valor === '99999999999993' ||
        valor === '99999999999994' ||
        valor === '99999999999995' ||
        valor === '99999999999996' ||
        valor === '99999999999997' ||
        valor === '99999999999998' ||
        valor === '99999999999999')
    ) {
      return false;
    } else {
      return true;
    }
  }

  getValor() {
    if (!this.existemDados()) { return ' '; }
    if (this.valor) {
      return this.valor;
    } else if (this.dados.length > 0) {
      const valor = this.dados[0][this.dados[0].length - 1];
      return valor ? (<any>valor).toString() : ' ';
    }
    return ' ';
  }

  getMetadata() {
    if (!this.existemDados()) { return ' '; }
    if (this.metadata) {
      return this.metadata;
    } else if (this.rotulosY.length > 0) {
      return this.rotulosY[0];
    }
    return ' ';
  }

  getIndexSelecionado() {
    if (!this.existemDados()) { return -1; }
    if (this.indexSelecionado > -1) {
      return this.indexSelecionado;
    }
    return this.rotulosX.length - 1;
  }

  setaValorMouse(event: any, grafico: any) {
    if (!this.existemDados()) { return; }
    const rect = grafico.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element.
    const y = event.clientY - rect.top; // y position within the element.

    this.indexSelecionado = Math.floor(x / (rect.width / this.rotulosX.length));
    this.valor =
      this.dados[0] && this.dados[0][this.indexSelecionado]
        ? this.dados[0][this.indexSelecionado]
        : '';
    this.metadata = this.rotulosY.length > 0 ? this.rotulosY[0] : '';
  }

  setTooltip(event: any, grafico: any) {
    if (!this.existemDados()) { return; }

    const rect = grafico.getBoundingClientRect();
    const mouse_x =
      (event.clientX - rect.left) * (this.LARGURA_GRAFICO / rect.width); // x position within the element.
    const mouse_y =
      (event.clientY - rect.top) * (this.ALTURA_GRAFICO / rect.height); // y position within the element.

    let min_dist = Number.MAX_VALUE;
    this.tooltip = null;

    // console.log(mouse_x, mouse_y, rect.width, rect.height);

    for (let i = 0; i < this.dados.length; i++) {
      for (let j = 0; j < this.dados[i].length; j++) {
        const x = this.getX(j, 0);
        const y = this.getY(j, i);

        const dist =
          (mouse_x - x) * (mouse_x - x) + (mouse_y - y) * (mouse_y - y);

        if (dist <= min_dist) {
          min_dist = dist;
          this.tooltip = {
            x: (x / this.LARGURA_GRAFICO) * 100,
            y: (y / this.ALTURA_GRAFICO) * 100,
            valor: this.dados[i][j],
            rotulo: this.rotulosY[i]
          };
          // console.log(min_dist);
        }
      }
    }
  }

  resetTooltip() {
    this.tooltip = null;
  }

  resetValor() {
    this.valor = null;
    this.metadata = null;
    this.indexSelecionado = -1;
  }
}
