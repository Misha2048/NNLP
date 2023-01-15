import { ICourse, IUser, IUserCourse } from "../interfaces";
import { ILiterature } from "../interfaces";
import { client } from "./client";

export class CourseService {
    static async getAllCourses(limit: Number | null = null): Promise<ICourse[]> | null {
        let sql = `SELECT * FROM course`;
        if(limit) sql += ` LIMIT ${limit}`;
        const data = await client.query(sql + ';').then(result => result.rows).catch(() => null);
        return data;
    }

    static async getCourseById(id: String): Promise<ICourse> | null {
        const data = await client.query(`SELECT * FROM course WHERE id=${id};`).then(result => result.rows[0]).catch(() => null);
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
        const data = await client.query(`DELETE FROM course WHERE id=${id};`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async getUsersOnCourse(id: String): Promise<IUser[]> | null {
        const data = await client.query(`SELECT users.id, users.first_name, users.last_name, users.username, users.email FROM user_course JOIN users ON users.id=user_course.user_id WHERE user_course.course_id=${id};`).then(result => result.rows).catch(() => null);
        return data;
    }

    static async getLiteratureOnCourse(id: String): Promise<ILiterature[]> | null {
        const data = await client.query(`SELECT id, course_id, path FROM literature WHERE course_id=${id};`).then(result => result.rows).catch(() => null);
        return data;
    }

    static async subscribe(subData: IUserCourse): Promise<IUserCourse> | null {
        const {user_id, course_id} = subData;
        const data = await client.query(`INSERT INTO user_course(user_id, course_id) VALUES(${user_id}, ${course_id}) RETURNING *;`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async unsubscribe(subData: IUserCourse): Promise<IUserCourse> | null {
        const {user_id, course_id} = subData;
        const data = await client.query(`DELETE FROM user_course WHERE user_id=${user_id} AND course_id=${course_id} RETURNING *;`).then(result => result.rows[0]).catch(() => null);
        return data;
    }
};