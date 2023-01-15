import { createRes } from "../helpers";
import { TokenService, UserService } from "../services";

export const auth = async (req, res, next) => {
    let token, error, status;
    try {
        token = req.headers.authorization.split(" ")[1];
    }
    catch (e) {
        createRes(res, {
            status: 403,
            error: "Forbidden",
        });
        return;
    }
    const payload = await TokenService.verify(token);
    const db_token = await UserService.getToken(String(payload.id));

    if(token != db_token) {
        createRes(res, {
            error: "Unauthorized",
            status: 401,
        });
        return; 
    }
    req.user = await UserService.getUserById(String(payload.id));
    next()
} 