import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { IToken } from "../interfaces";
dotenv.config();

export class TokenService {
    static async sign(payload: IToken): Promise<String> {
        return await jwt.sign(payload, process.env.TOKEN_SECRET);
    }

    static async verify(token: String): Promise<IToken> {
        return await jwt.verify(token, process.env.TOKEN_SECRET);
    }
};