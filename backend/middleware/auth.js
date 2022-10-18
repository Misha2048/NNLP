const {tokenService, UserService} = require("../services");
const {throwError} = require("../helpers");

const auth = async(req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    const {id} = tokenService.verifyToken(token);
    const user = await UserService.getUser(id);
    if(token != user.token) next(throwError("Tokens do not match", 403));
    req.user = user;
}

module.exports = auth;