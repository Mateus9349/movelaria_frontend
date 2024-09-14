import { useState } from 'react';
import Botao from '../Botao';
import styles from './ReceberMadeira.module.scss';
import Papa from 'papaparse';
import { Madeira } from '../../interfaces/madeira.interface';
import http from '../http';
import Loading from '../Loading';

export default function ReceberMadeira() {
    const [loadin, setLoading] = useState<boolean>(false);
    const [madeiras, setMadeiras] = useState<Madeira[]>([]);

    const lerDadosArquivo = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const arquivo = e.target.files?.[0];

            // Verificar se o arquivo é do tipo CSV
            if (arquivo && arquivo.type === 'text/csv') {
                Papa.parse<Madeira>(arquivo, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                        const dadosValidos = result.data.filter(dado => dado && Object.values(dado).some(val => val !== null && val !== ''));
                        setMadeiras(prevMadeiras => [...prevMadeiras, ...dadosValidos]);
                    },
                    error: (error) => {
                        console.error('Erro ao analisar o CSV:', error.message);
                        alert('Erro ao analisar o CSV. Verifique o formato do arquivo.');
                    },
                });
            } else {
                alert('Por favor, selecione um arquivo CSV válido.');
            }
        } catch (error) {
            console.error('Erro inesperado:', error);
            alert('Ocorreu um erro inesperado durante a leitura do arquivo.');
        }
    };

    const transformarDados = (madeiras: Madeira[]) => {
        return madeiras.map(madeira => {
            console.log('Transformando madeira:', madeira); // Log para depuração

            // Verifique se o valor é uma string antes de chamar replace
            const convertToNumber = (value: any) =>
                typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value;

            return {
                COD: madeira.COD !== undefined ? Number(madeira.COD) : undefined,
                DOF: madeira.DOF?.toString(),
                NF: madeira.NF?.toString(),
                comprimento: madeira.comprimento ? convertToNumber(madeira.comprimento) : undefined,
                data: madeira.data,
                expessura: madeira.expessura ? convertToNumber(madeira.expessura) : undefined,
                largura: madeira.largura ? convertToNumber(madeira.largura) : undefined,
                metroCubico: madeira.metroCubico ? convertToNumber(madeira.metroCubico) : undefined,
                nomeCientifico: madeira.nomeCientifico,
                nomePopular: madeira.nomePopular,
                observacao: madeira.observacao,
                placa: madeira.placa ? madeira.placa.toString() : undefined,
                processada: madeira.processada,
                produto: madeira.produto,
                quantidade: madeira.quantidade !== undefined ? Number(madeira.quantidade) : undefined,
                tora: madeira.tora,
                valor: madeira.valor ? convertToNumber(madeira.valor) : undefined,
                ativo: true
            };
        });
    };



    const enviar = async (madeiras: Madeira[]) => {
        const madeirasTransformadas = transformarDados(madeiras); // Transformar os dados antes de enviar

        try {
            setLoading(true);

            for (const madeira of madeirasTransformadas) {
                await http.post('madeiras', madeira);
                console.log('madeira: ' + madeira.COD + ' salva com sucesso!');
            }

            // Exibe o alert quando todas as operações forem concluídas com sucesso
            alert('Operação realizada com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar madeira:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            {loadin ? <Loading /> :
                <div>
                    <h3 className={styles.title}>Ler dados do arquivo CSV</h3>

                    <div className={styles.divArquivo}>
                        <label className={styles.labelArquivo}>Arquivo: </label>
                        <input
                            className={styles.inputArquivo}
                            type='file'
                            accept='.csv'
                            onChange={lerDadosArquivo}
                        /><br /><br />
                    </div>

                    <Botao
                        text={'Enviar'}
                        onClick={() => enviar(madeiras)}
                    />
                </div>
            }
        </>
    );
}
