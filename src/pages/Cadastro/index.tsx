import React, { useState } from 'react';
import './style.css'
import NavBar from '../../components/NavBar';
import CabecalhoCadastros from '../../components/CabecalhoCadastros';
import FormColaborador from '../../components/Forms/FormColaborador';
import FormMaquina from '../../components/Forms/FormMaquina';


type FormularioSelecionado = 'colaborador' | 'maquina' | null;

export default function Cadastro() {
  const [formularioSelecionado, setFormularioSelecionado] = useState<FormularioSelecionado>(null);

  const mostrarFormulario = (formulario: FormularioSelecionado) => {
    setFormularioSelecionado(formulario);
  };

  return (
    <main>
      <NavBar />
      <div className="container-cadastros">
        <CabecalhoCadastros mostrarFormulario={mostrarFormulario} />

        {formularioSelecionado === 'colaborador' && <FormColaborador />}
        
        {formularioSelecionado === 'maquina' && <FormMaquina />}
      </div>
    </main>
  );
}
