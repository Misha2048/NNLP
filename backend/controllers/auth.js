const { createRes, throwError } = require('../helpers');
const { UserService, TokenService } = require('../services');
// const joi = require('joi');
// const { AppointmentSchema } = require('../models');
const md5 = require("md5");

class AuthController {
  static async login(req, res, next) {
    const { email, password } = req.body;
    let user = await UserService.getUserByEmail(email);
    if (!user) throwError('User not found', 404);
    if (md5(password) != user.password) throwError('Password is invalid', 403);
    user = await UserService.updateToken(TokenService.createAccessToken({ id: user.id }));
    createRes(res, {
      ...user,
    },
    200,
    "Success",
    );
  }

  static async signUp(req, res, next) {
    // if(joi.validate(req.body, AppointmentSchema).error) throwError('Validation error', 403);
    const { firstName, lastName, email, password } = req.body;
    let user = await UserService.create(firstName, lastName, email, password);
    if (!user) throwError('User not found', 404);
    user = await UserService.updateToken(TokenService.generateAccessToken({ id: user.id }));
    createRes(res, {
      ...user,
    }, 
    200,
    "Success",
    );
  }

  static async logout(req, res, next) {
    const data = await UserService.deleteToken(req.user.id);
    if(!data) throwError('Something went wrong', 400);
    createRes(res, data, 204, "Success");
  }

  static async deleteUser(req, res, next) {
    const data = await UserService.delete(req.user.id);
    if(!data) throwError('Something went wrong', 400);
    createRes(res, data, 204, "Success");
  }
}

module.exports = AuthController;