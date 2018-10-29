import { Injectable } from '@angular/core';
import { localidades } from './localidades.lista';
import { Pais } from './localidade.model';

const PAISES_BY_SLUG: { [slug: string]: Pais } = localidades.paises.reduce(
  (agg, pais) => ({ ...agg, [pais.slug]: pais }),
  {}
);

@Injectable()
export class LocalidadeService {
  public getAllPaises() {
    return localidades.paises;
  }

  public getAllSiglas() {
    return this.getAllPaises().map(pais => pais.sigla);
  }

  public getPaisesByDDI(ddi: string): Pais[] | null {
    return this.getAllPaises().filter(pais => pais.ddi === ddi) || null;
  }

  public getPaisBySlug(slug: string): Pais | null {
    return PAISES_BY_SLUG[slug] || null;
  }

  public getPaisByNome(
    nome: string,
    idioma: 'en' | 'es' | 'pt' = 'pt'
  ): Pais | null {
    return this.getAllPaises().find(pais => pais.nomes[idioma] === nome) || null;
  }

  public getPaisBySigla(sigla: string): Pais | null {
    const property: 'sigla' | 'sigla3' =
      sigla && sigla.length === 2 ? 'sigla' : 'sigla3';
    return (
      this.getAllPaises().find((pais: Pais) => pais[property] === sigla) || null
    );
  }
}
