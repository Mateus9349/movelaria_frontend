import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Processos from "../../pages/Processos";
import Cadastro from "../../pages/Cadastro";
import Madeiras from "../../pages/Madeiras";
import NovoProcesso from "../../pages/NovoProcesso";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/processos" element={<Processos/>} />
            <Route path="/cadastros" element={<Cadastro/>} />
            <Route path="/madeiras" element={<Madeiras/>} />
            <Route path="/novoProcesso" element={<NovoProcesso/>} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;