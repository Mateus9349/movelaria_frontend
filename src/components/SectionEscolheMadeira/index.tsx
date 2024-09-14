import { useEffect, useState } from "react";
import http from "../../components/http";
import CardEscolheMadeira from "../../components/CardEscolheMadeira";
import { Madeira } from "../../interfaces/madeira.interface";
import Botao from "../Botao";
import FormCortaMadeira from "../Forms/FormCortaMadeira";

export default function SectionEscolheMadeira() {
    const [madeiras, setMadeiras] = useState<Madeira[]>([]);
    const [madeirasSelecionadas, setMadeirasSelecionadas] = useState<Madeira[]>([]);
    const [indiceAtual, setIndiceAtual] = useState<number>(0); // Estado para controlar o índice
    const [sectionMadeiras, setSectionMadeiras] = useState<boolean>(false);
    const [sectionMaquinas, setSectionMaquinas] = useState<boolean>(false);
    const [gastosMadeira, setGastosMadeira] = useState<number>(0);

    const buscaMadeiras = async () => {
        try {
            const dadosMadeiras = await http.get('madeiras');
            setMadeiras(dadosMadeiras.data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    const handleMadeiraClick = (madeira: Madeira) => {
        setMadeirasSelecionadas(prevState =>
            prevState.find(item => item.id === madeira.id)
                ? prevState.filter(item => item.id !== madeira.id)
                : [...prevState, madeira]
        );
    }

    const selecionaMadeira = () => {
        setSectionMadeiras(true);
        setIndiceAtual(0); // Começar sempre pelo primeiro item selecionado
    }

    const handleProximaMadeira = (custoMadeira: number) => {
        // Avança para a próxima madeira no array
        if (indiceAtual < madeirasSelecionadas.length - 1) {
            setGastosMadeira((prevGastosMadeira) => prevGastosMadeira + custoMadeira);
            setIndiceAtual(indiceAtual + 1);
        } else {
            setGastosMadeira((prevGastosMadeira) => prevGastosMadeira + custoMadeira);
            setSectionMadeiras(false)
            setSectionMaquinas(true);
        }
    }

    useEffect(() => {
        buscaMadeiras();
    }, []);

    return (
        <section>
            {!sectionMadeiras && !sectionMaquinas && (
                <div>
                    <h1>Escolha a madeira</h1>
                    <h2>Madeiras selecionadas: {madeirasSelecionadas.map(item => item.COD).join(', ')}</h2>
                    <Botao text={'Próximo'} onClick={selecionaMadeira} />
                    {madeiras.filter(madeira => madeira.ativo).map(madeira => (
                        <div
                            key={madeira.id}
                            onClick={() => handleMadeiraClick(madeira)}
                            style={{
                                cursor: 'pointer',
                                border: madeirasSelecionadas.some(item => item.id === madeira.id) ? '2px solid blue' : '1px solid grey',
                                padding: '10px',
                                margin: '5px'
                            }}
                        >
                            <CardEscolheMadeira madeira={madeira} />
                        </div>
                    ))}

                </div>
            )}

            {sectionMadeiras && madeirasSelecionadas.length > 0 && (
                <FormCortaMadeira
                    madeira={madeirasSelecionadas[indiceAtual]} // Renderiza a madeira atual
                    onProximaMadeira={handleProximaMadeira} // Função para avançar para a próxima madeira
                />
            )}

            {sectionMaquinas && <h1>Section Maquinas <Botao text={'ok'} onClick={() => console.log(gastosMadeira)} /></h1>}
        </section>
    );
}
