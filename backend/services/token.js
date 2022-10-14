const jwt = require("jsonwebtoken")

class TokenService {
    static createAccessToken(payload) {
        return jwt.sign(payload, process.env.TOKEN_SECRET);
    }

    static verifyToken(token) {
        return jwt.verify(token, process.env.TOKEN_SECRET);
    }
}

module.exports = TokenService;