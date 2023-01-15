import { createRes } from "../helpers";
import { CourseService } from "../services";

export class CourseController {
    static async getAllCourses(req, res, next): Promise<void> {
        const courses = await CourseService.getAllCourses();
        const error = courses ? "" : "Couldn't fetch data";
        createRes(res, {
            status: error ? 400 : 200,
            data: courses,
            error,
        });
    }

    static async getCourse(req, res, next): Promise<void> {
        const course = await CourseService.getCourseById(req.params.id);
        const error = course ? "" : "Couldn't fetch data";
        createRes(res, {
            status: error ? 400 : 200,
            data: course,
            error,
        });
    }

    static async createCourse(req, res, next): Promise<void> {
        const {name} = req.body;
        const course = await CourseService.createCourse({
            name,
        });
        const error = course ? "" : "Couldn't create data";
        createRes(res, {
            status: error ? 400 : 201,
            data: course,
            error,
        });
    }

    static async updateCourse(req, res, next): Promise<void> {
        const {name} = req.body;
        const {id} = req.params;
        const course = await CourseService.updateCourse({
            id,
            name,
        });
        const error = course ? "" : "Couldn't update data";
        createRes(res, {
            status: error ? 400 : 200,
            data: course,
            error,
        });
    }

    static async deleteCourse(req, res, next): Promise<void> {
        const {id} = req.params;
        const course = await CourseService.deleteCourse(id);
        const error = course ? "" : "Couldn't delete data";
        createRes(res, {
            status: error ? 400 : 204,
            data: course,
            error,
        });
    }

    static async getUsersOnCourse(req, res, next): Promise<void> {
        const {id} = req.params;
        const users = await CourseService.getUsersOnCourse(id);
        const error = users ? "" : "Couldn't fetch data";
        createRes(res, {
            status: error ? 400 : 200,
            data: users,
            error,
        });
    }

    static async getLiteratureOnCourse(req, res, next): Promise<void> {
        const literature = await CourseService.getLiteratureOnCourse(req.params.id);
        const error = literature ? "" : "Couldn't fetch data";
        createRes(res, {
            status: error ? 400 : 200,
            data: literature,
            error,
        });
    }
}