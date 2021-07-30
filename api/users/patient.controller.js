const { createPatient, getPatients, getPatientByPatientId, updatePatient, deletePatient } = require('./patient.service');

module.exports = {

    createP: (req, res) => {
        const body = req.body;
        createPatient(body, (err, results) => {
            if (err) {
                console.log("[mysql error]", err);
                return;
            }
            return res.json({
                success: 1,
                message: "Utente registado com sucesso!"
            });
        });
    },
    getPatients: (req, res) => {
        getPatients((err, results) => {
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
    getPatientByPatientId: (req, res) => {
        const id = req.params.id;
        getPatientByPatientId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Utente não encontrado"
                });
            }
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    updatePatient: (req, res) => {
        const body = req.body;
        updatePatient(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Erro ao atualizar os dados do utente"
                })
            }
            return res.json({
                success: 1,
                message: "Dados do utente atulizado com sucesso"

            })
        })
    },
    deletePatient: (req, res) => {
        const id = req.params.id;
        deletePatient(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "Utente não encontrado"
                });
            }
            return res.json({
                success: 1,
                message: "Utente removido com sucesso"
            });
        });
    },

}