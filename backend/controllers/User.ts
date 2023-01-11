import { createRes } from "../helpers";
import { UserService } from "../services";

export class UserController {
    static async getUser(req, res, next): Promise<void> {
        const user = await UserService.getUserById(req.params.id);
        createRes(res, {
            status: 200,
            data: user,
        });
    }

    static async getUsers(req, res, next): Promise<void> {
        const users = await UserService.getAllUsers();
        createRes(res, {
            status: 200,
            data: users,
        })
    }

    static async createUser(req, res, next): Promise<void> {
        const {firstName, lastName, username, email, password} = req.body;
        const user = await UserService.createUser({
            firstName,
            lastName,
            username, 
            email,
            password,
        });
        createRes(res, {
            status: 201,
            data: user,
        });
    }

    static async updateUser(req, res, next): Promise<void> {
        const {firstName, lastName, username, email, password} = req.body;
        const user = await UserService.updateUser({
            id: req.params.id,
            firstName,
            lastName,
            username,
            email,
            password,
        });
        createRes(res, {
            status: 200,
            data: user,
        })
    }

    static async deleteUser(req, res, next): Promise<void> {
        const user = await UserService.deleteUser(req.params.id);
        createRes(res, {
            status: 204,
            data: user,
        });
    }
};