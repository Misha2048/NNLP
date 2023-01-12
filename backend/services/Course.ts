import { ICourse, IUser } from "../interfaces";
import { client } from "./client";

export class CourseService {
    static async getAllCourses(limit: Number | null = null): Promise<ICourse[]> | null {
        let sql = `SELECT * FROM course`;
        if(limit) sql += ` LIMIT ${limit}`;
        const data = await client.query(sql + ';').then(result => result.rows).catch(() => null);
        return data;
    }

    static async getCourseById(id: String): Promise<ICourse> | null {
        const data = await client.query(`SELECT * FROM course WHERE id=${Number(id)};`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async createCourse(courseData: ICourse): Promise<ICourse> | null {
        const {name} = courseData;
        const data = await client.query(`INSERT INTO course(name) VALUES('${name}') RETURNING *;`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async updateCourse(courseData: ICourse): Promise<ICourse> | null {
        const {id, name} = courseData;
        const data = await client.query(`UPDATE course SET name='${name}' WHERE id=${id};`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async deleteCourse(id: String): Promise<ICourse> | null {
        const data = await client.query(`DELETE FROM course WHERE id=${Number(id)};`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async getUsersOnCourse(id: String): Promise<IUser[]> | null {
        const data = await client.query(`SELECT users.id, users.first_name, users.last_name, users.username, users.email FROM user_course JOIN users ON users.id=user_course.user_id WHERE user_course.course_id=${Number(id)};`).then(result => result.rows).catch(() => null);
        return data;
    }
};