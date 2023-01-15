import { createRes } from "../helpers";
import { UserService } from "../services"

export const checkPermissions = (permissions: String[]) => async (req, res, next) => {
    const user_permissions = await UserService.getPermissions(String(req.user.id));
    if(!permissions.every(element => {
        return user_permissions.includes(element);
    })) createRes(res, {
        status: 401,
        error: "User does not have enough permissions",
    });
    else {
        next();
    }
}