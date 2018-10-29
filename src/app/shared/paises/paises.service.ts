import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../request.service';
import { IValoresSintese, API, ISintese } from './models';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LocalidadeService } from '../localidade';
import { ITemaIndicadores } from './models/TemaIndicadores';

export enum TemaId {
  sintese = 1,
  olimpicos = 2,
  economia = 3,
  sociais = 4,
  ambiente = 5,
  populacao = 6,
  telefonia = 7,
  ODM = 8,
  ODS = 9,
  saude = 100
}

export const sinteseDict = {
  62941: 'capital',
  62942: 'extensao',
  62943: 'idioma',
  62944: 'localizacao',
  62945: 'moeda'
};

export const temasApp = [
  // PaisesEnum.temas.sintese,
  TemaId.economia,
  TemaId.sociais,
  TemaId.ambiente,
  TemaId.populacao,
  TemaId.telefonia,
  TemaId.saude
];

@Injectable({
  providedIn: 'root'
})
export class PaisesService extends RequestService {
  constructor(
    _httpClient: HttpClient,
    private localidadeService: LocalidadeService
  ) {
    super(_httpClient);
  }

  getSintese(sigla: string): Observable<ISintese> {
    return this.request<API.ResultadoByIndicador[]>(
      `https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/1/resultados/${sigla}`
    ).pipe(
      map(response => {
        const { slug } = this.localidadeService.getPaisBySigla(sigla);
        const valores = response.reduce(
          (agg, item) => {
            return { ...agg, [sinteseDict[item.id]]: item.res[0].res['-'] };
          },
          {} as IValoresSintese
        );

        return { slug, sigla, ...valores };
      })
    );
  }

  getHistorico(sigla: string) {
    return this.request<API.Historico[]>(
      `https://servicodados.ibge.gov.br/api/v1/paises/olimpicos/valores/pais/${sigla}`
    ).pipe(map(response => response.find(obj => obj.indicador === 44)));
  }

  getResultados(sigla: string[]) {
    return this.request<API.ResultadoByLocalidade[]>(
      `https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/0/resultados/${sigla.join('|')}?groupBy=localidade`
    );
  }

  getIndicadoresETemas() {
    return this.getAllIndicadores().pipe(
      map(indicadores =>
        indicadores.filter(indicador =>
          temasApp.includes(parseInt(indicador.posicao, 10))
        )
      ),
      map(indicadores => {
        const temas = this.setTemas(indicadores);
        const indicadoresMap = {};
        indicadores.forEach(ind => this.flatTree(ind, indicadoresMap));
        return { indicadores: indicadoresMap, temas };
      })
    );
  }

  getAllIndicadores() {
    return this.request<API.Indicador[]>(
      `https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/0?scope=sub`
    );
  }

  setTemas(
    indicadores: API.Indicador[]
  ): { [posicao: string]: ITemaIndicadores } {
    const saude: ITemaIndicadores = {
      posicao: TemaId.saude.toString(10),
      nome: 'Saude',
      indicadores: [62973, 62971]
    };

    const temas: ITemaIndicadores[] = indicadores.reduce((agg, indicador) => {
      const tema = {
        posicao: indicador.posicao,
        nome: indicador.indicador,
        indicadores: indicador.children
          .map(ind => ind.id)
          .filter(id => !saude.indicadores.includes(id))
      };
      return [...agg, tema];
    }, []);

    return temas
      .concat(saude)
      .reduce((agg, tema) => ({ ...agg, [tema.posicao]: tema }), {});
  }

  private flatTree(
    indicador: API.Indicador,
    flatten: { [id: number]: API.Indicador }
  ) {
    flatten[indicador.id] = indicador;
    if (indicador.children && indicador.children.length > 0) {
      indicador.children.forEach(ind => this.flatTree(ind, flatten));
    }
    delete indicador.children;
  }
}
