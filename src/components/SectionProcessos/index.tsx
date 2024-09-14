import Botao from "../Botao";
import { useNavigate } from "react-router-dom";

const SectionProcessos = () => {
    const navigate = useNavigate();

    return<section>
        <div>
            <Botao text={'Novo Processo'} onClick={() => navigate('/novoProcesso')}/>
            <Botao text={'Continuar Processo'} onClick={() => ('ok')}/>
        </div>
    </section>
}

export default SectionProcessos;