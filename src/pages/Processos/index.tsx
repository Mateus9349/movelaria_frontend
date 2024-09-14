import  Styles  from "./Processos.module.scss"
import NavBar from "../../components/NavBar"
import SectionProcessos from "../../components/SectionProcessos"

export default function Processos(){
    return(
        <main className={Styles.principal}>
            <NavBar/>
            <h1>Processos</h1>
            <SectionProcessos />
        </main>
    )
}