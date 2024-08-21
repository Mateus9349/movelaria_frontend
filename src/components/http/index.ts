import axios, { AxiosInstance } from 'axios';

const storedBaseURL: string = 'http://localhost:3000';

// Criação da instância do Axios com a URL base configurada
const http: AxiosInstance = axios.create({
  baseURL: storedBaseURL
});

export default http;
