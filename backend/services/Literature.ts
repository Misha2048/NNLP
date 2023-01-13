import { ILiterature } from "../interfaces";
import { client } from "./client";

export class LiteratureService {
    static async getAllLiterature(): Promise<ILiterature[]> | null {
        const data = await client.query(`SELECT * FROM literature;`).then(result => result.rows).catch(() => null);
        return data;
    }

    static async getLiteratureById(id: String): Promise<ILiterature> | null {
        const data = await client.query(`SELECT * FROM literature WHERE id=${id};`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async createLiterature(literatureData: ILiterature): Promise<ILiterature> | null {
        const {course_id, path} = literatureData;
        const data = await client.query(`INSERT INTO literature(course_id, path) VALUES(${course_id}, '${path}') RETURNING *;`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async updateLiterature(literatureData: ILiterature): Promise<ILiterature> | null {
        const {id, course_id, path} = literatureData;
        const data = await client.query(`UPDATE literature SET course_id=${course_id}, path='${path}' WHERE id=${id} RETURNING *;`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async deleteLiterature(id: String): Promise<ILiterature> | null {
        const data = await client.query(`DELETE FROM literature WHERE id=${id} RETURNING *;`).then(result => result.rows[0]).catch(() => null);
        return data;
    }
};