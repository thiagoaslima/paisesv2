import { API } from 'app/shared/paises/models';

export function formatUnidadeIndicador(indicador: API.Indicador) {
  let valor = '';

  if (indicador.unidade) {
    const { unidade } = indicador;

    if (unidade.id) {
      valor = unidade.id;
    }

    if (unidade.multiplicador && unidade.multiplicador !== 1) {
      valor += ' × ' + unidade.multiplicador;
    }
  }

  return valor;
}

export function isValorValido(value: string) {
  switch (value) {
    case '99999999999999':
    case '99999999999998':
    case '99999999999997':
    case '99999999999996':
    case '99999999999995':
    case '99999999999992':
    case '99999999999991':
    case '-':
    case null:
      return false;

    default:
      return true;
  }
}
