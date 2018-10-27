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
}

