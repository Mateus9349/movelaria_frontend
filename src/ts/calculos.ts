export function calculaValorCorteMadeira(
    valorTotal: number | undefined, 
    metroCubicoTotal: number | undefined, 
    metroCubicoCortado: number): number {
    // Verifica se os valores são válidos para evitar divisões por zero
    if (metroCubicoTotal === 0 || valorTotal === undefined || metroCubicoTotal === undefined) {
        throw new Error("Um ou mais valores invalidos!");
    }

    // Calcula o valor proporcional do corte
    const valorCorte = (metroCubicoCortado / metroCubicoTotal) * valorTotal;
    return valorCorte;
}