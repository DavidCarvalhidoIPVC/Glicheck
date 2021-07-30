const pool = require("../../config/database");

module.exports = {

    create: (data, callBack) => {
        pool.query(
            `INSERT INTO user(username, password, role_ID)
                VALUES(?, ?, ?)`,
            [
                data.username,
                data.password,
                data.role_ID
            ],
            (error, results, fields) => {
                if (error)
                    callBack(error)
                return callBack(null, results)
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `SELECT ID, username, role_ID from user`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            `SELECT id, username, role_ID from user where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0])
            }
        )
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update user set username=?, password=?, role_ID=? where id=?`,
            [
                data.username,
                data.password,
                data.role_ID,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `DELETE FROM user WHERE id=?`,
            [data.id],
            (error, results, fields) => {
                if (error)
                    return callBack(error);
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUsername: (username, callBack) => {
        pool.query(
            `SELECT username, password, name from user, role where user.role_ID = role.ID and username = ?`,
            [username],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    }

}