import axios from 'axios';
import { createUserServices } from '../services/user';

const client = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createClient = () => {
  return {
    userServices: createUserServices(client),
  };
};
