import { createRes } from "../helpers";
import { LiteratureService } from "../services";

export class LiteratureController {
    static async getAllLiterature(req, res, next): Promise<void> {
        const literature = await LiteratureService.getAllLiterature();
        const error = literature ? "" : "Couldn't fetch data";
        createRes(res, {
            status: error ? 400 : 200,
            data: literature,
            error,
        });
    }

    static async getLiterature(req, res, next): Promise<void> {
        const literature = await LiteratureService.getLiteratureById(req.params.id);
        const error = literature ? "" : "Couldn't fetch data";
        createRes(res, {
            status: error ? 400 : 200,
            data: literature,
            error,
        });
    }

    static async createLiterature(req, res, next): Promise<void> {
        const {course_id} = req.params;
        const {path} = req.body;
        const literature = await LiteratureService.createLiterature({
            course_id,
            path,
        });
        const error = literature ? "" : "Couldn't create data";
        createRes(res, {
            status: error ? 400 : 201,
            data: literature,
            error,
        });
    }

    static async updateLiterature(req, res, next): Promise<void> {
        const {id, course_id} = req.params;
        const {path} = req.body;
        const literature = await LiteratureService.createLiterature({
            id,
            course_id,
            path,
        });
        const error = literature ? "" : "Couldn't update data";
        createRes(res, {
            status: error ? 400 : 200,
            data: literature,
            error,
        });
    }

    static async deleteLiterature(req, res, next): Promise<void> {
        const literature = await LiteratureService.deleteLiterature(req.params.id);
        const error = literature ? "" : "Couldn't delete data";
        createRes(res, {
            status: error ? 400 : 200,
            data: literature,
            error,
        });
    }
};