import React, { useState } from 'react';
import http from '../../http';

// Definição da interface para os dados do formulário
interface FormData {
  nome: string;
  tipoProcesso: string;
  fonteEnergia: string;
  potencia: number;
  valor: number;
  dataAquisicao: string;
  vidaUtil: number;
  depreciacaoAnual: number,
  depreciacaoDia: number,
  diasUtilizados: number;
  horasTrabalhadas: number;
}

const FormMaquina: React.FC = () => {
  // Tipagem dos estados
  const [nome, setNome] = useState<string>('');
  const [tipoMaquina, setTipoMaquina] = useState<string>('');
  const [energia, setEnergia] = useState<string>('kw');
  const [potencia, setPotencia] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [dataAquisicao, setDataAquisicao] = useState<string>('');
  const [vidaUtil, setVidaUtil] = useState<string>('');
  const [diasTrabalhados, setDiasTrabalhados] = useState<string>('');
  const [horasTrabalhadas, setHorasTrabalhadas] = useState<string>('');

  // Tipagem do parâmetro do evento
  const cadastrar = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = {
      nome: nome,
      tipoProcesso: tipoMaquina,
      fonteEnergia: energia,
      potencia: Number(potencia),
      valor: Number(valor),
      dataAquisicao: dataAquisicao,
      vidaUtil: Number(vidaUtil),
      depreciacaoAnual: 0,
      depreciacaoDia: 0,
      diasUtilizados: Number(diasTrabalhados),
      horasTrabalhadas: Number(horasTrabalhadas)
    };

    console.log(formData)

    await http.post('/maquinas', formData)
      .then(res => {
        alert('Formulário de Máquina enviado com sucesso!');
        setNome('');
        setTipoMaquina('higienizadora');
        setEnergia('kw');
        setPotencia('');
        setValor('');
        setDataAquisicao('');
        setVidaUtil('');
        setDiasTrabalhados('');
        setHorasTrabalhadas('');
      })
      .catch(error => {
        console.error('Erro ao enviar formulário de Máquina:', error);
        alert('Operação não realizada!');
      });
  };

  return (
    <div className="maquinario-cadastro-inativo div-form">
      <form className="extra alinhar-horizontal-form-maquinas" onSubmit={cadastrar}>

        <div>
          <label>Nome:</label>
          <input type="text" placeholder="Insira seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />

          <label>Operação executada pela máquina</label>
          <input type='text' placeholder="Processo" value={tipoMaquina} onChange={(e) => setTipoMaquina(e.target.value)}/>

          <label>Energia</label>
          <select value={energia} onChange={(e) => setEnergia(e.target.value)}>
            <option value="kw">Rede Elétrica</option>
            <option value="diesel">Motor Estacionário</option>
          </select>

          <label>Potência</label>
          <input type="number" placeholder="kW" value={potencia} onChange={(e) => setPotencia(e.target.value)} />

          <label>Valor</label>
          <input type="number" placeholder="0,00 R$" value={valor} onChange={(e) => setValor(e.target.value)} />
        </div>

        <div>
          <label>Data de Aquisição</label>
          <input type="date" value={dataAquisicao} onChange={(e) => setDataAquisicao(e.target.value)} />

          <label>Vida Útil em Anos</label>
          <input type="number" value={vidaUtil} onChange={(e) => setVidaUtil(e.target.value)} />

          <label>Dias trabalhados</label>
          <input type="number" value={diasTrabalhados} onChange={(e) => setDiasTrabalhados(e.target.value)} />

          <label>Horas trabalhadas</label>
          <input type="number" value={horasTrabalhadas} onChange={(e) => setHorasTrabalhadas(e.target.value)} />

          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default FormMaquina;

