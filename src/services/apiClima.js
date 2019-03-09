import axios from 'axios';

const apiClima = axios.create({
  baseURL: 'http://apiadvisor.climatempo.com.br'
});

export default apiClima;