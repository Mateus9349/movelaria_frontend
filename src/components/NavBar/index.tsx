import logo from '../../assets/img/logo.svg';
import styles from './NavBar.module.scss';

export default function NavBar(){
    return(
        <header className={styles.menu}>
            <a href="/">
                <img src={logo} alt='Logo inatu' className={styles.logo}/>
            </a>
            <nav className={styles.nav}>
                <a id={styles.cadastros} className={styles.links} href="/cadastros">Cadastros</a>
                <a id={styles.coletas} className={styles.links} href="/madeiras">Madeira</a>
                <a id={styles.processos} className={styles.links} href="/processos">Processos</a>
                {/* <a id={styles.lotes} className={styles.links} href="">Lotes</a> */}
            </nav>
        </header>
    )
}