import { ICourse, IToken, IUser } from "../interfaces";
import { client } from "./client";
import { TokenService } from "./Token";

export class UserService {
    static async getAllUsers(): Promise<IUser[]> | null {
        const data = await client.query(`SELECT id, first_name, last_name, username, email FROM users;`).then(result => result.rows).catch(() => null);
        return data;
    }

    static async getUserById(id: String): Promise<IUser> | null {
        const data = await client.query(`SELECT id, first_name, last_name, username, email FROM users WHERE id=${id};`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async getUserByUsername(username: String): Promise<IUser> | null {
        const data = await client.query(`SELECT id, first_name, last_name, username, email FROM users WHERE username='${username}';`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async getUserByEmail(email: String): Promise<IUser> | null {
        const data = await client.query(`SELECT id, first_name, last_name, username, email FROM users WHERE email='${email}';`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async createUser(userData: IUser): Promise<IUser> | null {
        const {firstName, lastName, username, email, password} = userData;
        let data = await client.query(`INSERT INTO users(first_name, last_name, username, password, email, permissions) VALUES('${firstName}', '${lastName}', '${username}', '${email}', '${password}', '{}') RETURNING *;`).then(result => result.rows[0]).catch(() => null);
        if (!data) return data;
        const {id} = data
        const token = await this.setToken({
            id,
            password,
        });
        return {...data, token};
    }

    static async updateUser(userData: IUser): Promise<IUser> | null {
        const {id, firstName, lastName, username, email, password} = userData;
        const token = await this.setToken({
            id,
            password,
        });
        const data = await client.query(`UPDATE users SET first_name='${firstName}', last_name='${lastName}', username='${username}', email='${email}', password='${password}', token='${token}' WHERE id=${id} RETURNING *;`).then(result => result.rows[0]).catch(() => null);
        return data;
    }

    static async deleteUser(id: String): Promise<IUser> | null {
        const data = await client.query(`DELETE FROM users WHERE id=${id} RETURNING *;`).then(result => result.rows[0]);
        return data;
    }

    static async getCourses(id: String): Promise<ICourse> | null {
        const data = await client.query(`SELECT course.id, course.name FROM course JOIN user_course ON user_course.user_id=${id} WHERE course.id=user_course.course_id`).then(result => result.rows).catch(() => null);
        return data;
    }

    static async getToken(id: String): Promise<String> | null {
        return (await client.query(`SELECT token FROM users WHERE id=${id};`).then(result => result.rows[0].token).catch(() => null));
    }

    static async setToken(payload: IToken): Promise<String> | null {
        return (await client.query(`UPDATE users SET token='${TokenService.sign(payload)}' WHERE id=${payload.id} RETURNING token;`)).then(result => result.rows[0]).catch(() => null);
    }

    static async deleteToken(id: String): Promise<String> | null {
        return (await client.query(`UPDATE users SET token='' WHERE id=${id} RETURNING token;`).then(result => result.rows[0]).catch(() => null));
    }

    static async getPassword(id: String): Promise<String> | null {
        return (await client.query(`SELECT password FROM users WHERE id=${id};`).then(result => result.rows[0].password).catch(() => null));
    }

    static async getPermissions(id: String): Promise<String[]> | null {
        return (await client.query(`SELECT permissions FROM users WHERE id=${id};`).then(result => result.rows[0].permissions).catch(() => null));
    }
};