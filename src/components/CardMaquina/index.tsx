import { Maquina } from '../../interfaces/maquina.interface';
import styles from './CardMaquina.module.scss';
import editar from '../../assets/img/icons/btn-Editar.svg';
import excluirIcon from '../../assets/img/icons/btn-Excluir.svg';

interface CardMaquinaProps {
    maquina: Maquina;
    onClick: (data: Maquina) => void;
    excluir: (data: Maquina) => void;
}

const CardMaquina: React.FC<CardMaquinaProps> = ({ maquina, onClick, excluir }) => {
    return (
        <div className={styles.container}>
            <h3>{maquina.nome}</h3>
            <h3>{maquina.tipoProcesso}</h3>
            <button className={styles.btn} onClick={() => onClick(maquina)}>
                <img src={editar} alt="Editar" />
            </button>

            <h3>{maquina.dataAquisicao}</h3>
            <h3>{maquina.potencia} kW</h3>
            <button className={styles.btn}>
                <img src={excluirIcon} alt="Excluir" onClick={() => excluir(maquina)}/>
            </button>
        </div>
    );
}

export default CardMaquina;