import type { Identifiers } from '../../identifiers';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace UserTypes {
  export type GetVariables = {
    id: Identifiers.UserId;
  };

  export type UserModel = {
    id: Identifiers.UserId;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  };
}
