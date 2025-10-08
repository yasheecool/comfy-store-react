import axios from 'axios';
import { store } from '../store';
import endpoints from './endpoints';

const instance = axios.create({
  baseURL: 'https://strapi-store-server.onrender.com/api',
});

instance.interceptors.request.use((config) => {
  const token = store?.getState()?.user?.user?.token;
  const url = config.url;

  if (token && url === endpoints.allOrders) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
