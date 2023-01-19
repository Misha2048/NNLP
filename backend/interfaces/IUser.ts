import { IToken } from "./IToken";

export interface IUser {
    id?: String,
    firstName: String,
    lastName: String,
    username: String,
    password?: String,
    email: String,
    token?: IToken,
    permissions?: String[],
};