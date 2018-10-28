export declare module API {
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
}

