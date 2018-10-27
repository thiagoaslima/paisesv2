export interface Ranking {
    indicador: string;
    periodo: string;
    contexto: number|null;
    unidade: {
        id: string,
        classe: string,
        multiplicador: number
    },
    res: {
        ranking: number,
        localidade: string,
        res: string
    }[]
}
