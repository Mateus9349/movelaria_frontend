import { Maquina } from "../../interfaces/maquina.interface";

interface Props {
    maquina: Maquina;
}

const CardEscolheMaquina: React.FC<Props> = ({ maquina }) => {
    return(
        <div>
            <h2>{maquina.nome}</h2>
            <h2>{maquina.tipoProcesso}</h2>
        </div>
    )
}

export default CardEscolheMaquina;