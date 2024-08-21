import { Madeira } from "../../interfaces/madeira.interface";
import styles from './CarMadeira.module.scss';
import editar from '../../assets/img/icons/btn-Editar.svg';
import excluir from '../../assets/img/icons/btn-Excluir.svg';

interface CardMadeiraProps {
    madeira: Madeira;
}

export default function CardMadeira({ madeira }: CardMadeiraProps) {
    return (
        <div className={styles.container}>
            <h3>{madeira.COD}</h3>
            <h3>{madeira.tipo}</h3>
            <button className={ styles.btn }>
                <img src={editar} />
            </button>

            <h3>{madeira.dataEntrada}</h3>
            <h3>{madeira.metroCubico} m³</h3>
            <button className={ styles.btn }>
                <img src={excluir} />
            </button>
        </div>
    )
}