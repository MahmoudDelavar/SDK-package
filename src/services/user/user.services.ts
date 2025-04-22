import type { Client } from '../../client/client.type';
import { mappers } from './user.mapper';
import type { UserTypes } from './user.types';

export const createUserServices = (client: Client) => ({
  get: async ({ id }: UserTypes.GetVariables) => {
    const response = await client.get(`/users/${id}`);

    return mappers.get(response.data);
  },
});
