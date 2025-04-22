import type { UserDTO } from '../../dto';
import type { Identifiers } from '../../identifiers';
import type { UserTypes } from './user.types';

export const mappers = {
  get: (response: UserDTO): UserTypes.UserModel => ({
    email: response.email,
    id: response.id as unknown as Identifiers.UserId,
    name: response.name,
    phone: response.phone,
    username: response.username,
    website: response.website,
  }),
};
