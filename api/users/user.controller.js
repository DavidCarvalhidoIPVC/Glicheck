const {
    create,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser,
    getUserByUsername
    
} = require('./user.service');

const { sign } = require('jsonwebtoken');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');

module.exports = {

    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if (err) {
                console.log("[mysql error]", err);
                return;
            }
            return res.json({
                success: 1,
                message: "Utilizador registado com sucesso"
            });
        });
    },
    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Registo não encontrado asdasdasdasd"
                });
            }
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Erro ao atualizar o registo"
                })
            }
            return res.json({
                success: 1,
                message: "Registo atulizado com sucesso"

            })
        })
    },
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    message: "Utilizador removido com sucesso"
                });
            }
            return res.json({
                message: "Utilizador removido com sucesso"
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUsername(body.username, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "Utilizador invalido"
                });
            }

            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({ result: results }, "qwe1234", {
                    expiresIn: "12h"
                });
               

                return res.json({
                    message: "Login efetuado com sucesso",
                    token: jsontoken,
                    role: results.nome,
                    username: results.username


                });
            } else {
                return res.json({
                    success: 0,
                    data: "Password incorreto!"
                });
            }
        });
    }

}