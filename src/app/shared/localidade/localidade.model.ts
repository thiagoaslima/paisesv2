export type tipo_localidade = 'pais' | 'regiao' | 'subregiao' | 'continente';

export interface Localidade {
  tipo: string;
  slug: string;
  codigo: string;
  nome?: string;
  nomes: {
    en: string;
    es: string;
    pt: string;
  };
  parent: number | string;
}

export interface Pais extends Localidade {
  codigo: string;
  slug: string;
  sigla: string;
  sigla3: string;
  nome?: string;
  nomes: {
    en: string;
    es: string;
    pt: string;
  };
  apelidos?: {
    en?: string[] | never[];
    es?: string[] | never[];
    pt?: string[] | never[];
  };
  parent: number | string;
  parents?: {
    continente?: number | string;
    regiao?: number | string;
    subregiao?: number | string;
  };
  currentSlug?: string;
  slugs: {
    en: string;
    es: string;
    pt: string;
  };
  ddi: string;
  onu: boolean;
}
