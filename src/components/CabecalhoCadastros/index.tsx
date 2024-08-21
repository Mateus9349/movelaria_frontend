import React from 'react';
import './style.css';

type CabecalhoCadastrosProps = {
  mostrarFormulario: (formulario: 'colaborador' | 'maquina' ) => void;
};

const CabecalhoCadastros: React.FC<CabecalhoCadastrosProps> = ({ mostrarFormulario }) => {
  return (
    <div className="cabecalho-cadastros">
      <h1>Cadastros</h1>

      <button onClick={() => mostrarFormulario('colaborador')} className="bt">
        Colaborador
      </button>
      <button onClick={() => mostrarFormulario('maquina')} className="bt">
        Maquinário
      </button>
    </div>
  );
};

export default CabecalhoCadastros;

