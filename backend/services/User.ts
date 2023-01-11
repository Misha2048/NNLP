import { IUser } from "../interfaces";
import { client } from "./client";

export class UserService {
    static async getAllUsers(): Promise<IUser[]> | null {
        const data = await client.query(`SELECT * FROM users;`).then(result => result.rows).catch(err => err);
        return data ? data : null;
    }

    static async getUserById(id: String): Promise<IUser> | null {
        const data = await client.query(`SELECT * FROM users WHERE id=${Number(id)};`).then(result => result.rows[0]).catch(() => null);
        return data ? data : null;
    }

    static async createUser(userData: IUser): Promise<IUser> | null {
        const {firstName, lastName, username, email, password} = userData;
        const data = await client.query(`INSERT INTO users(first_name, last_name, username, password, email) VALUES('${firstName}', '${lastName}', '${username}', '${email}', '${password}') RETURNING *;`).then(result => result.rows[0]);
        return data ? data : null;
    }

    static async updateUser(userData: IUser): Promise<IUser> | null {
        const {id, firstName, lastName, username, email, password} = userData;
        const data = await client.query(`UPDATE users SET first_name='${firstName}', last_name='${lastName}', username='${username}', email='${email}', password='${password}' WHERE id=${id} RETURNING *;`).then(result => result.rows[0]).catch(() => null);
        return data ? data : null;
    }

    static async deleteUser(id: String): Promise<IUser> | null {
        const data = await client.query(`DELETE FROM users WHERE id=${Number(id)} RETURNING *;`).then(result => result.rows[0]).catch(() => null);
        return data ? data : null;
    }
};