const client = require("./client");
const TokenService = require("./token");

class UserService {
    static async getUserList() {
        const users = await client.query("SELECT first_name, last_name, email FROM users;").then(result => result.rows).catch(err => 404);
        return users !== 404 ? users : null;
    }

    static async getUser(id) {
        const user = await client.query(`SELECT * FROM users WHERE id=${id};`).then(result => result.rows).catch(err => 404);
        return user !== 404 ? user[0] : null;
    }

    static async getUserByEmail(email) {
        const user = await client.query(`SELECT * FROM users WHERE email='${email};'`).then(result => result.rows).catch(err => 404);
        return user !== 404 ? user[0] : null;
    }

    static async createUser(data) {
        const user = await client.query(`INSERT INTO users(first_name, last_name, email, password) VALUES ('${data.firstName}', '${data.lastName}', '${data.email}', MD5('${data.password}')) RETURNING *;`).then(result => result.rows).catch(err => 400);
        return user !== 400 ? user : null;
    }

    static async updateUser(data) {
        const user = await client.query(`UPDATE users SET first_name='${data.firstName}', last_name='${data.lastName}, email='${data.email}, password=MD5('${password}' WHERE id=${data.id}) RETURNING *;`).then(result => result.rows).catch(err => 400);
        return user !== 400 ? user : null;
    }

    static async deleteUser(id) {
        const status = await client.query(`DELETE FROM users WHERE id=${id}`).then(result => 204).catch(err => 400);
        return status === 204 ? id : null;
    }

    static async updateToken(id, token) {
        const data = await client.query(`UPDATE users SET token='${token}' WHERE id=${id} RETURNING *`).then(result => result.rows).catch(err => 400);
        return data !== 400 ? data : null;
    }

    static async deleteToken(id) {
        const data = await client.query(`UPDATE users SET token='' WHERE id=${id} RETURNING *`).then(result => result.rows).catch(err => 400);
        return data !== 400 ? data : null;
    }
}

module.exports = UserService;