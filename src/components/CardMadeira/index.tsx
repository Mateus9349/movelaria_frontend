import { Madeira } from "../../interfaces/madeira.interface";
import styles from './CarMadeira.module.scss';
import editar from '../../assets/img/icons/btn-Editar.svg';
import excluirIcon from '../../assets/img/icons/btn-Excluir.svg';

interface CardMadeiraProps {
    madeira: Madeira;
    onClick: (data: Madeira) => void;
    excluir: (data: Madeira) => void;
}

const CardMadeira: React.FC<CardMadeiraProps> = ({ madeira, onClick, excluir }) => {
    return (
        <div className={styles.container}>
            <h3>{madeira.COD}</h3>
            <h3>{madeira.nomePopular}</h3>
            <button className={styles.btn} onClick={() => onClick(madeira)}>
                <img src={editar} alt="Editar" />
            </button>

            <h3>{madeira.data}</h3>
            <h3>{madeira.metroCubico} m³</h3>
            <button className={styles.btn}>
                <img src={excluirIcon} alt="Excluir" onClick={() => excluir(madeira)}/>
            </button>
        </div>
    );
}

export default CardMadeira;
