import { IToken } from "./IToken";

export interface IUser {
    id?: Number,
    firstName: String,
    lastName: String,
    username: String,
    password?: String,
    email: String,
    token?: IToken,
    permissions?: String[],
};