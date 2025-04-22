import type { Branded } from '../helpers';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Identifiers {
  export type UserId = Branded<string, 'user-id'>;
}
