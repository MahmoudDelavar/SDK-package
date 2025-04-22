import axios from 'axios';
import { createUserServices } from '../services/user';

export const createClient = (baseURL: string) => {
  const client = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    userServices: createUserServices(client),
  };
};
