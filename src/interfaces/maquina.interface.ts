export interface Maquina {
    id: string;
    nome: string;
    tipoProcesso: string;
    fonteEnergia: string;
    potencia: number;
    valor: number;
    dataAquisicao: string;
    vidaUtil: number;
    depreciacaoAnual: number,
    depreciacaoDia: number,
    diasUtilizados: number;
    horasTrabalhadas: number;
}