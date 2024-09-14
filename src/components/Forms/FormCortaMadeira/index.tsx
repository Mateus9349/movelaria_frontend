import React, { useState } from "react";
import Botao from "../../Botao";
import { Madeira } from "../../../interfaces/madeira.interface";
import http from "../../http";
import Loading from "../../Loading";
import { calculaValorCorteMadeira } from "../../../ts/calculos";

export default function FormCortaMadeira({ madeira, onProximaMadeira }: { madeira: Madeira, onProximaMadeira: (numero: number) => void }) {
    const [loadin, setLoading] = useState<boolean>(false);
    const [metroCubicoRetirado, setMetroCubicoRetirado] = useState<number | string>(0);

    const cortarMadeira = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        // Converte e valida o valor inserido
        const valorCortado = Number(metroCubicoRetirado);
        if (isNaN(valorCortado) || valorCortado <= 0) {
            console.log("Por favor, insira um valor válido para o metro cúbico.");
            return;
        }

        try {
            setLoading(true);

            let metroCubicoRestante = 0;
            let ativo = true; // A variável "ativo" foi renomeada corretamente

            // Garantir que madeira.metroCubico tenha valor definido
            if (madeira.metroCubico !== undefined) {
                metroCubicoRestante = madeira.metroCubico - valorCortado;
            }

            // Se o restante for zero ou menor, a madeira não estará mais ativa
            if (metroCubicoRestante <= 0) {
                ativo = false;
                metroCubicoRestante = 0; // Evita valores negativos
            }

            // Calcula o valor correspondente ao corte
            const custoMadeira = calculaValorCorteMadeira(madeira.valor, madeira.metroCubico, valorCortado);
            let custoRestante = 0;
            if (madeira.valor !== undefined) {
                custoRestante = madeira.valor - custoMadeira;
            }

            // Atualiza a madeira no servidor com o valor do metro cúbico restante e o estado "ativo"
            const resposta = await http.put(`madeiras/${madeira.id}`, {
                metroCubico: metroCubicoRestante,
                valor: custoRestante,
                ativo: ativo
            });

            onProximaMadeira(custoMadeira); // Passa o valor calculado para o componente pai
            console.log(`Madeira ID ${madeira.id}: Metro cúbico cortado: ${valorCortado}, Custo: R$ ${custoMadeira}, Valor: ${custoRestante}`);
        } catch (error) {
            console.log("Erro ao cortar madeira:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMetroCubicoRetirado(value);
    };

    return (
        <>
            {loadin && <Loading />}

            <form>
                <label>COD: {madeira.COD}</label>
                <p>{madeira.COD}</p>

                <label>Metro Cubico: {madeira.metroCubico} m³</label>
                <p>{madeira.metroCubico} m³</p>

                <label>Quantos m³ serão utilizados?</label>
                <input
                    type="number"
                    step="0.001"
                    value={metroCubicoRetirado}
                    onChange={handleChange}
                    min="0"
                />

                <Botao
                    text={'Retirar'}
                    onClick={cortarMadeira}
                />
            </form>
        </>
    );
}
