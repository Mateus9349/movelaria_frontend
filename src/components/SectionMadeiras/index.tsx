import { useEffect, useState } from "react";
import http from "../http";
import { Madeira } from "../../interfaces/madeira.interface";
import CardMadeira from "../CardMadeira";
import styles from './SectionMadeiras.module.scss';
import FormMadeira from "../Forms/FormMadeira";

export default function SectionMadeiras() {
    const [madeiras, setMadeiras] = useState<Madeira[]>([]);
    const [click, setClick] = useState<boolean>(false);
    const [madeiraSelecionada, setMadeiraSelecionada] = useState<Madeira>({});

    const iniciaEstoque = async () => {
        try {
            const response = await http.get('madeiras');
            setMadeiras(response.data);
        } catch (error) {
            console.error("Erro ao carregar o estoque:", error);
        }
    }

    const selecionaMadeira = (dados: Madeira) => {
        setMadeiraSelecionada(dados);
        setClick(true);
    }

    const atualizaMadeira = async (dados: Madeira) => {
        const { id, createdAt, updatedAt, deletedAt, ...allowedData } = dados;

        if (allowedData.COD && typeof allowedData.COD !== 'number') {
            allowedData.COD = Number(allowedData.COD);
        }

        try {
            await http.put(`madeiras/${dados.id}`, allowedData);
            setClick(false);
            await iniciaEstoque();
        } catch (error) {
            console.error("Erro ao atualizar a madeira:", error);
        }
    }

    const excluir = async (dados: Madeira) => {
        try {
            await http.delete(`madeiras/${dados.id}`);
            await iniciaEstoque();
        } catch (error) {
            console.error("Erro ao excluir a madeira:", error);
        }
    }

    useEffect(() => {
        iniciaEstoque();
    }, []);

    // Ordena as madeiras pela data da mais recente para a mais antiga
    const madeirasOrdenadas = [...madeiras].sort((a, b) => {
        const dataA = a.data ? new Date(a.data).getTime() : -Infinity; // Usa -Infinity para datas ausentes aparecerem primeiro
        const dataB = b.data ? new Date(b.data).getTime() : -Infinity;
        return dataB - dataA; // Ordem decrescente (da mais recente para a mais antiga)
    });

    return (
        <section className={styles.container}>
            {click &&
                <FormMadeira
                    initialData={madeiraSelecionada}
                    onSubmit={atualizaMadeira}
                />
            }

            <h1>Madeira em Estoque</h1>

            <div className={styles.containerMadeiras}>
                {madeirasOrdenadas.map((item) => (
                    <CardMadeira
                        key={item.id}
                        madeira={item}
                        onClick={selecionaMadeira}
                        excluir={excluir}
                    />
                ))}
            </div>
        </section>
    );
}
