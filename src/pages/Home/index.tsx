import styles from './Home.module.scss'
import NavBar from "../../components/NavBar";

export default function Home(){
    return(
        <main className={styles.principal}>
            <NavBar/>
            <h1>Home</h1>
        </main>
    )
}