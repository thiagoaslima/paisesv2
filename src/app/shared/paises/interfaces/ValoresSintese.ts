export interface IValoresSintese {
  capital: string;
  extensao: string;
  idioma: string;
  localizacao: string;
  moeda: string;
}

export interface ISintese extends IValoresSintese {
  sigla: string;
  slug: string;
}
