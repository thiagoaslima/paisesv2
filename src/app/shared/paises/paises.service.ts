import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../request.service';
import { IValoresSintese, API, ISintese } from './models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LocalidadeService } from '../localidade';

export namespace PaisesEnum {
  export enum temas {
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
}

export const sinteseDict = {
  62941: 'capital',
  62942: 'extensao',
  62943: 'idioma',
  62944: 'localizacao',
  62945: 'moeda'
};

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
    ).pipe(
      map(response => response.find(obj => obj.indicador === 44))
    );
  }
}
