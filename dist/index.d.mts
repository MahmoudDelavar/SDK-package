declare const createClient: (baseURL: string) => {
    userServices: {
        get: ({ id }: UserTypes.GetVariables) => Promise<UserTypes.UserModel>;
    };
};

declare const __brand: unique symbol;
type Brand<B> = {
    [__brand]: B;
};
type Branded<T, B> = Brand<B> & T;

declare namespace Identifiers {
    type UserId = Branded<string, 'user-id'>;
}

declare namespace UserTypes {
    type GetVariables = {
        id: Identifiers.UserId;
    };
    type UserModel = {
        id: Identifiers.UserId;
        name: string;
        username: string;
        email: string;
        phone: string;
        website: string;
    };
}

export { Identifiers, UserTypes, createClient };
