import React, { useState, FormEvent } from 'react';
import http from '../../http';
import Botao from '../../Botao';
import './style.css';
import { Madeira } from '../../../interfaces/madeira.interface';


const FormMadeira: React.FC = () => {
  const [data, setData] = useState<string>('');
  const [tipo, setTipo] = useState<string>('Prancha');
  const [dofe, setDofe] = useState<string>('');
  const [cod, setCOD] = useState<string>('');
  const [altura, setAltura] = useState<number | ''>('');
  const [comprimento, setComprimento] = useState<number | ''>('');
  const [largura, setLargura] = useState<number | ''>('');
  const [valorPago, setValorPago] = useState<number | ''>('');

  const calcularMetroCubico = () => {
    const alturaNum = typeof altura === 'number' ? altura : parseFloat(String(altura)) || 0;
    const comprimentoNum = typeof comprimento === 'number' ? comprimento : parseFloat(String(comprimento)) || 0;
    const larguraNum = typeof largura === 'number' ? largura : parseFloat(String(largura)) || 0;
    return alturaNum * comprimentoNum * larguraNum;
  };

  const receberMadeira = async (e: FormEvent) => {
    e.preventDefault();

    const dados: Madeira = {
      id: undefined,
      dataEntrada: data,
      tipo: tipo,
      DOFE: dofe,
      COD: cod,
      altura: typeof altura === 'number' ? altura : parseFloat(String(altura)) || 0,
      comprimento: typeof comprimento === 'number' ? comprimento : parseFloat(String(comprimento)) || 0,
      largura: typeof largura === 'number' ? largura : parseFloat(String(largura)) || 0,
      metroCubico: calcularMetroCubico(),
      valorPago: typeof valorPago === 'number' ? valorPago : parseFloat(String(valorPago)) || 0,
      ativo: true,
    };

    try {
      await http.post('madeiras', dados);
      alert('Madeira cadastrada com sucesso!');
      window.location.reload();
    } catch (error) {
      alert('Erro ao cadastrar madeira: ' + error);
    }
  };

  return (
    <form className="formMadeira" onSubmit={receberMadeira}>
      <fieldset className="extra">
        <div className='alinhar-horizontal'>
          <div>
            <label>Data de Entrada</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div>
            <label>Tipo de peça</label>
            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="Prancha">Prancha</option>
              <option value="Borda-a-Borda">Borda-a-Borda</option>
            </select>
          </div>
        </div>
        <div className="alinhar-horizontal">
          <div>
            <label>DOFE</label>
            <input
              type="text"
              value={dofe}
              onChange={(e) => setDofe(e.target.value)}
            />
          </div>
          <div>
            <label>COD</label>
            <input
              type="text"
              value={cod}
              onChange={(e) => setCOD(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Altura (m)</label>
          <input
            type="number"
            step="0.01"
            value={altura === '' ? '' : altura}
            onChange={(e) => setAltura(e.target.value === '' ? '' : Number(e.target.value))}
          />
        </div>
        <div>
          <label>Comprimento (m)</label>
          <input
            type="number"
            step="0.01"
            value={comprimento === '' ? '' : comprimento}
            onChange={(e) => setComprimento(e.target.value === '' ? '' : Number(e.target.value))}
          />
        </div>
        <div>
          <label>Largura (m)</label>
          <input
            type="number"
            step="0.01"
            value={largura === '' ? '' : largura}
            onChange={(e) => setLargura(e.target.value === '' ? '' : Number(e.target.value))}
          />
        </div>
        <div>
          <label>Metros Cúbicos</label>
          <input
            type="number"
            step="0.01"
            value={calcularMetroCubico()}
            readOnly
          />
        </div>
        <div>
          <label>Valor pago (R$)</label>
          <input
            type="number"
            step="0.01"
            value={valorPago === '' ? '' : valorPago}
            onChange={(e) => setValorPago(e.target.value === '' ? '' : Number(e.target.value))}
          />
        </div>
      </fieldset>
      <Botao text="Receber Madeira" onClick={receberMadeira}/>
    </form>
  );
};

export default FormMadeira;

