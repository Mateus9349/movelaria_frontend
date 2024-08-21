import  Styles  from "./Processos.module.scss"
import NavBar from "../../components/NavBar"

export default function Processos(){
    return(
        <main className={Styles.principal}>
            <NavBar/>
            <h1>Processos</h1>
        </main>
    )
}