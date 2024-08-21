import React from "react";

interface CabecalhoMadeirasProps {
    mostrarform: () => void;
    mostraMadeiras: () => void;
}

const CabecalhoMadeiras = ( { mostrarform, mostraMadeiras }: CabecalhoMadeirasProps ) => {
    return (
        <section>
            <h1>Madeiras</h1>
            <div>
                <button onClick={mostrarform} className="bt">Receber</button>
                <button onClick={mostraMadeiras} className="bt">Recebidas</button>
            </div>
        </section>
    );
}

export default CabecalhoMadeiras;
