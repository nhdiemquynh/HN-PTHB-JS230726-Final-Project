import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2000/api/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    "Accept": "application/json"
  },
  responseType: 'json',
  maxBodyLength: Infinity,
  maxContentLength: Infinity,
});

export default api;