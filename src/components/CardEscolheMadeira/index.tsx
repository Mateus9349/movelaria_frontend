import { Madeira } from "../../interfaces/madeira.interface";
import styles from './CardEscolheMadeira.module.scss';

interface Props {
    madeira: Madeira;
}

const CardEscolheMadeira: React.FC<Props> = ({ madeira }) => {
    return(
        <div className={styles.container}>
            <h2>{ madeira.COD }</h2>
            <h2>{ madeira. metroCubico }</h2>
            <h2>{ madeira.nomePopular }</h2>
            <h2>{ madeira.data }</h2>
        </div>
    )
}

export default CardEscolheMadeira;