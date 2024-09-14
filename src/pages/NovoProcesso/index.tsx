import NavBar from "../../components/NavBar";
import SectionEscolheMadeira from "../../components/SectionEscolheMadeira";



const NovoProcesso = () => {

    return (
        <main>
            <NavBar />

            <SectionEscolheMadeira />
        </main>
    );
}

export default NovoProcesso;

{/* <div>
                <h1>Escolha a madeira</h1>
                <h2>Madeiras selecionadas: {madeirasSelecionadas.map(item => item.COD).join(', ')}</h2> 
                {madeiras.map(madeira => (
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
                <button onClick={() => setClick(true)}>Próximo</button> 
            </div>

            <div>
                <h1>Escolha a maquina</h1>
                <h2>Máquinas selecionadas: {maquinasSelecionadas.join(', ')}</h2> 
                {maquinas.map(maquina => (
                    <div
                        key={maquina.id}
                        onClick={() => handleMaquinaClick(maquina.id)}
                        style={{
                            cursor: 'pointer',
                            border: maquinasSelecionadas.includes(maquina.id) ? '2px solid blue' : '1px solid grey',
                            padding: '10px',
                            margin: '5px'
                        }}
                    >
                        <CardEscolheMaquina maquina={maquina} />
                    </div>
                ))}
                <button onClick={() => console.log('Madeiras selecionadas:', madeirasSelecionadas, 'Máquinas selecionadas:', maquinasSelecionadas)}>Salvar Seleções</button>
            </div>
 */}