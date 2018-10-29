import { createSelector } from '@ngrx/store';
import { getIndicadoresTema } from '@root/store/selectors/indicadores.selector';
import { getResultadosOfPais } from '@root/store/selectors/resultados.selector';
import { formatUnidadeIndicador, isValorValido } from 'app/helpers';

export const getDadosCard = (temaId: string) =>
  createSelector(
    getIndicadoresTema(temaId),
    getResultadosOfPais,
    (indicadores, resultados) => {
      return indicadores.map(indicador => {
        const id = indicador.id;
        const nome = indicador.indicador;
        const unidade = formatUnidadeIndicador(indicador);
        const fonte = indicador.fonte ? indicador.fonte.slice(-1)[0].fontes : [];

        const resultadoObj = resultados[indicador.id];
        const periodos = Object.keys(resultadoObj)
          .filter(periodo => !!resultadoObj[periodo] && isValorValido(resultadoObj[periodo]))
          .sort()
          .slice(-5);
        const valores = periodos.map(periodo => resultadoObj[periodo]);

        return { id, nome, unidade, fonte, periodos, valores };
      });
    }
  );
