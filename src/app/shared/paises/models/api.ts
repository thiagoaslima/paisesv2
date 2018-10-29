export declare namespace API {
  export interface ResultadoByIndicador {
    id: number; // id indicador;
    res: Array<{
      localidade: string;
      res: Array<{
        [periodo: string]: string | null;
      }>;
    }>;
  }

  export interface Historico {
    pais: string;
    periodo: string;
    indicador: number;
    valor: string;
    valor_en: string;
  }

  export interface Indicador {
    id: number;
    posicao: string;
    classe: string;
    children: Indicador[];
    nota: string;
    indicador: string;
    unidade: {
      id: string;
      classe: string;
      multiplicador: number;
      proporcao: number;
      sufixo: string;
    };
    metadado: {
      descricao: string;
      calculo: string;
    };
    fonte: Array<{
      periodo: string;
      fontes: string[];
    }>;
  }

  export interface ResultadoByLocalidade {
    localidade: string;
    res: Array<{
      indicador: number;
      res: { [periodo: string]: string | null };
    }>;
  }
}
