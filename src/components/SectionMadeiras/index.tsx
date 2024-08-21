import { useEffect, useState } from "react"
import http from "../http"
import { Madeira } from "../../interfaces/madeira.interface";
import CardMadeira from "../CardMadeira";
import styles from './SectionMadeiras.module.scss';

export default function SectionMadeiras() {
    const [madeiras, setMadeiras] = useState<Madeira[]>([]);

    const iniciaEstoque = async () => {
        try {
            const response = await http.get('madeiras');
            setMadeiras(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Erro ao carregar o estoque:", error);
        }
    }

    useEffect(() => {
        iniciaEstoque();
    }, [])

    return (
        <section className={styles.container}>
            <h1>Madeira em Estoque</h1>

            <div className={ styles.containerMadeiras }>
                {madeiras.map((item) => (
                    <CardMadeira
                        key={item.id}
                        madeira={item}
                    />
                ))}
            </div>
        </section>
    )
} 