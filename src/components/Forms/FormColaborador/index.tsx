import React, { useState } from 'react';
import http from '../../http';
import { AxiosError, AxiosResponse } from 'axios';

const FormColaborador: React.FC = () => {
  // Definindo o estado com tipos explícitos
  const [nome, setNome] = useState<string>('');
  const [idade, setIdade] = useState<string>('');
  const [sexo, setSexo] = useState<string>('M');
  const [comunidade, setComunidade] = useState<string>('');
  const [funcao, setFuncao] = useState<string>('');
  const [valorHora, setValorHora] = useState<string>('');
  const [diaria, setDiaria] = useState<string>('');

  // Interface para o Colaborador
  interface Colaborador {
    nome: string;
    idade: number;
    sexo: string;
    comunidade: string;
    funcao: string;
    valor_hora: number;
    valor_diaria: number;
  }

  // Função para lidar com o cadastro
  const cadastrar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Convertendo os valores numéricos para o formato correto
    const formData = {
      nome,
      idade: Number(idade),
      sexo,
      comunidade,
      funcao,
      valor_hora: Number(valorHora),
      valor_diaria: Number(diaria),
    };

    http
      .post<Colaborador>('/colaboradores', formData)
      .then((res: AxiosResponse<Colaborador>) => {
        alert('Formulário de Colaborador enviado com sucesso:');
        setNome('');
        setIdade('');
        setSexo('M');
        setComunidade('');
        setFuncao('');
        setValorHora('');
        setDiaria('');
      })
      .catch((error: AxiosError) => {
        console.error('Erro ao enviar formulário de Colaborador:', error);
        alert('Operação não realizada!');
      });
  };

  return (
    <div className="funcionario-cadastro-inativo div-form">
      <form className="extra" onSubmit={cadastrar}>
        <label htmlFor="">Nome:</label>
        <input
          type="text"
          placeholder="Insira seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="">Idade:</label>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <label>Sexo</label>
        <select name="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>

        <label htmlFor="">Comunidade:</label>
        <input
          type="text"
          placeholder="comunidade/distrito/rio/igarapé"
          value={comunidade}
          onChange={(e) => setComunidade(e.target.value)}
        />

        <label htmlFor="">Função:</label>
        <input
          type="text"
          placeholder="Ex. Operador de máquina"
          value={funcao}
          onChange={(e) => setFuncao(e.target.value)}
        />

        <label htmlFor="">Valor Hora:</label>
        <input
          type="number"
          placeholder="Valor/hora R$"
          value={valorHora}
          onChange={(e) => setValorHora(e.target.value)}
        />

        <label htmlFor="">Diária:</label>
        <input
          type="number"
          placeholder="Valor diária R$"
          value={diaria}
          onChange={(e) => setDiaria(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default FormColaborador;

