import React, { useState, useEffect } from 'react';
import Botao from '../../Botao';
import './style.css';
import { Madeira } from '../../../interfaces/madeira.interface';

interface Props {
  onSubmit: (data: Madeira) => void;
  initialData?: Madeira;
}

const FormMadeira: React.FC<Props> = ({ onSubmit, initialData = {} }) => {
  const [dados, setDados] = useState<Madeira>({
    ...initialData,
    metroCubico: initialData.metroCubico || 0, // Inicializa com 0 se não tiver valor
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDados(prevState => ({
      ...prevState,
      [name]: value === '' ? '' : name === 'expessura' || name === 'comprimento' || name === 'largura' || name === 'valorPago'
        ? parseFloat(value)
        : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(dados);
  };

  return (
    <form className="formMadeira" onSubmit={handleSubmit}>
      <fieldset className="extra">
        <div className="alinhar-horizontal">
          <div>
            <label>Data de Entrada</label>
            <input
              type="date"
              name="data"
              value={dados.data || ''}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Placa</label>
            <input
              type="text"
              name="placa"
              value={dados.placa || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="alinhar-horizontal">
          <div>
            <label>Processada</label>
            <input
              type="text"
              name="processada"
              value={dados.processada || ''}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Nome Popular</label>
            <input
              type="text"
              name="nomePopular"
              value={dados.nomePopular || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="alinhar-horizontal">
          <div>
            <label>Nome Científico</label>
            <input
              type="text"
              name="nomeCientifico"
              value={dados.nomeCientifico || ''}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Tora</label>
            <input
              type="text"
              name="tora"
              value={dados.tora || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label>Produto</label>
          <input
            type="text"
            name="produto"
            value={dados.produto || ''}
            onChange={handleChange}
          />
        </div>

        <div className="alinhar-horizontal">
          <div>
            <label>Expessura (m)</label>
            <input
              type="number"
              step="0.01"
              name="expessura"
              value={dados.expessura || ''}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Comprimento (m)</label>
            <input
              type="number"
              step="0.01"
              name="comprimento"
              value={dados.comprimento || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="alinhar-horizontal">
          <div>
            <label>Largura (m)</label>
            <input
              type="number"
              step="0.01"
              name="largura"
              value={dados.largura || ''}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Quantidade</label>
            <input
              type="number"
              name="quantidade"
              value={dados.quantidade || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label>Metros Cúbicos</label>
          <input
            type="number"
            step="0.01"
            name="metroCubico"
            value={dados.metroCubico || ''}
            readOnly
          />
        </div>

        <div className="alinhar-horizontal">
          <div>
            <label>COD</label>
            <input
              type="number"
              name="COD"
              value={dados.COD || ''}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>NF</label>
            <input
              type="text"
              name="NF"
              value={dados.NF || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="alinhar-horizontal">
          <div>
            <label>DOF</label>
            <input
              type="text"
              name="DOF"
              value={dados.DOF || ''}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Observação</label>
            <input
              type="text"
              name="observacao"
              value={dados.observacao || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label>Valor Pago (R$)</label>
          <input
            type="number"
            step="0.01"
            name="valor"
            value={dados.valor || ''}
            onChange={handleChange}
          />
        </div>
      </fieldset>
      <Botao text="Receber Madeira" onClick={handleSubmit} />
    </form>
  );
};

export default FormMadeira;

