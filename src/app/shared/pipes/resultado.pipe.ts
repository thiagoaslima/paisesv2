import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultado'
})
export class ResultadoPipe implements PipeTransform {
  transform(value: any, unidade?: string): any {
    const unidades = ['r$'];
    const float =
      (typeof unidade !== 'undefined' && unidade !== null) ||
      unidade && unidades.indexOf(unidade.toLocaleLowerCase()) >= 0;

    switch (value) {
      case '99999999999999':
        return 'Ignorado';
      case '99999999999998':
        return 'Não disponível';
      case '99999999999997':
        return 'Não informado';
      case '99999999999996':
        return 'Não existente';
      case '99999999999995':
        return '*';
      case '99999999999992':
      case '99999999999991':
      case '-':
      case null:
        return '-';

      default:
        if (!isNaN(Number(value))) {
          value = Number(value);
          const isFloat = (n: any) => Number(n) === n && n % 1 !== 0;
          // let valueStr = (float || (float === undefined && isFloat(value))) ? (<number>value).toFixed(2).toString() : value.toString();
          const valueStr =
            float === true
              ? (<number>value).toFixed(2).toString()
              : value.toString();
          // return valueStr.replace(/[.]/g, ",").replace(/\d(?=(?:\d{3})+(?:\D|$))/g, "$&.");
          const partes = valueStr.split('.');
          let parteInteira = partes[0];
          const parteDecimal = partes[1];
          parteInteira = this.adicionaSeparadorMilhares(parteInteira, '.');
          return parteDecimal
            ? [parteInteira, parteDecimal].join(',')
            : parteInteira;
        } else {
          return value;
        }
    }
  }

  private adicionaSeparadorMilhares(n: string, separador = ' ') {
    const start = 0;
    let next = n.length % 3;
    const r = [];
    for (let curr = start; curr < n.length; curr = next, next += 3) {
      if (next === 0) {
        continue;
      }
      r.push(n.substring(curr, next));
    }
    return r.join(separador);
  }
}
