import { IResponse } from "../interfaces";

export const createRes = (res, params: IResponse): void => {
    res.status(params.status).json({
        data: params.data || {},
        status: params.status,
        error: params.error || "",
    });
}