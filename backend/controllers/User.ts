import { createRes } from "../helpers";
import { UserService } from "../services";

export class UserController {
    static async getUser(req, res, next): Promise<void> {
        const user = await UserService.getUserById(req.params.id);
        const error = user ? "" : "Couldn't fetch data";
        createRes(res, {
            status: error ? 400 : 200,
            data: user,
            error,
        });
    }

    static async getUsers(req, res, next): Promise<void> {
        const users = await UserService.getAllUsers();
        const error = users ? "" : "Couldn't fetch data";
        createRes(res, {
            status: error ? 400 : 200,
            data: users,
            error,
        })
    }

    static async getCourses(req, res, next): Promise<void> {
        const courses = await UserService.getCourses(req.params.id);
        const error = courses ? "" : "Couldn't fetch data";
        createRes(res, {
            status: error ? 400 : 200,
            data: courses,
            error,
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
        const error = user ? "" : "Couldn't create data";
        createRes(res, {
            status: error ? 400 : 201,
            data: user,
            error,
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
        const error = user ? "" : "Couldn't update data";
        createRes(res, {
            status: error ? 400 : 201,
            data: user,
            error,
        })
    }

    static async deleteUser(req, res, next): Promise<void> {
        const user = await UserService.deleteUser(req.params.id);
        const error = user ? "" : "Couldn't delete data";
        createRes(res, {
            status: error ? 400 : 204,
            data: user,
            error,
        });
    }
};