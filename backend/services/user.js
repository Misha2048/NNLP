const client = require("./client");

class UserService {
    static async getUserList() {
        const data = await client.query("SELECT first_name, last_name, email FROM users;").then(result => result.rows).catch(err => err);
        return data[0].id ? data : null;
    }

    static async getUser(id) {
        const data = await client.query(`SELECT * FROM users WHERE id=${id};`).then(result => result.rows).catch(err => err);
        return data[0].id ? data[0] : null;
    }

    static async createUser(data) {
        const status = await client.query(`INSERT INTO users(first_name, last_name, email, password) VALUES ('${data.firstName}', '${data.lastName}', '${data.email}', MD5('${data.password}'));`).then(result => 201).catch(err => 400);
        return status === 201 ? data : null;
    }

    static async updateUser(data) {
        const status = await client.query(`UPDATE users SET first_name='${data.firstName}', last_name='${data.lastName}, email='${data.email}, password=MD5('${password}' WHERE id=${data.id});`).then(result => 200).catch(err => 400);
        return status === 200 ? data : null;
    }

    static async deleteUser(id) {
        const status = await client.query(`DELETE FROM users WHERE id=${id}`).then(result => 204).catch(err => 400);
        return status === 200 ? id : null;
    }
}

module.exports = UserService;