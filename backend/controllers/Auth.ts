import { createRes } from "../helpers";
import { IUser } from "../interfaces";
import { AuthSchema } from "../schemas";
import { UserService } from "../services";

export class AuthController {
    static async register(res, req, next): Promise<void> {
        const userData: IUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };

        const result = await AuthSchema.validate(userData);
        if (result.error) { 
            createRes(res, {
                status: 400,
                error: "Inappropriate data",
            });
            return;
        }
        const user = await UserService.createUser(userData);
        const error = user ? "" : "Couldn't create user";
        createRes(res, {
            status: error ? 400 : 201,
            data: user,
            error,
        });
    }

    static async login(req, res, next): Promise<void> {
        const { login, password } = req.body;
        const { id, password: userPassword } = login.includes("@") ? (await UserService.getUserByEmail(login)) : (await UserService.getUserByUsername(login));
        if (password != userPassword) {
            createRes(res, {
                status: 400,
                error: "Passwords do not match",
            });
            return;
        }
        const token = await UserService.setToken({id, password});
        const error = token ? "" : "Couldn't set token";
        createRes(res, {
            status: error ? 400 : 200,
            data: {token,},
            error,
        });
    }

    static async logout(req, res, next): Promise<void> {
        const { id } = req.user;
        const token = await UserService.deleteToken(id);
        const error = token ? "" : "Couldn't log out";
        createRes(res, {
            status: error ? 400 : 204,
            data: {token,},
            error,
        });
    }
};