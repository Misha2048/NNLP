const {UserService} = require("../services");
const {createRes, throwError} = require("../helpers");

class UserController {
    static async getUserList(req, res, next) {
        const data = UserService.getUserList();
        if (!data) throwError(400, "Bad request");
        createRes(res, 200, data, "Success");
    }

    static async getUser(req, res, next) {
        const data = UserService.getUser(req.params.id);
        if(!data) throwError(400, "Bad request");
        createRes(res, 200, data, "Success");
    }

    static async createUser(req, res, next) {
        const data = UserService.createUser(req.body);
        if(!data) throwError(400, "Bad request");
        createRes(res, 201, data, "Success");
    }

    static async updateUser(req, res, next) {
        const data = UserService.updateUser(req.params.id, req.body);
        if(!data) throwError(400, "Bad request");
        createRes(res, 200, data, "Success");
    }

    static async deleteUser(req, res, next) {
        const data = UserService.deleteUser(req.params.id);
        if(!data) throwError(400, "Bad request");
        createRes(res, 204, data, "Success");
    }
}

module.exports = UserController;