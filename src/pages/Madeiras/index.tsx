import { useState } from 'react';
import './style.css'
import NavBar from '../../components/NavBar';
import CabecalhoMadeiras from '../../components/CabecalhoMadeiras';
import FormMadeira from '../../components/Forms/FormMadeira';
import SectionMadeiras from '../../components/SectionMadeiras';

const Madeiras = () => {
    const [click, setClick] = useState<boolean>(false);
    const [clickEstoque, setClickEstoque] = useState<boolean>(false);

    const mostrarform = (): void => {
        setClickEstoque(false);
        setClick(!click);
    }

    const mostraMadeiras = (): void => {
        setClick(false);
        setClickEstoque(!clickEstoque);
    }

    return (
        <main>
            <NavBar />
            
            <div>
                <CabecalhoMadeiras mostrarform={mostrarform} mostraMadeiras={mostraMadeiras} />
                {clickEstoque && <SectionMadeiras />}
            </div>

            {click && <FormMadeira />}
        </main>
    )
}

export default Madeiras;