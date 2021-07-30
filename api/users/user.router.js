const { createUser,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser,
    login
} = require('./user.controller');

const { createP, getPatients, getPatientByPatientId, updatePatient, deletePatient } = require('./patient.controller');



const router = require('express').Router();
/* const { checkToken } = require("../../auth/token_validation") */

//Rotas do Utilizador
router.post('/', createUser);
//router.get('/', getUsers);
//router.get('/:id', getUserByUserId);
router.patch('/', updateUser);
router.delete('/', deleteUser);
router.post('/login', login);


// Rotas do Patient
router.post('/patient', createP);
router.get('/patient', getPatients);
router.get('/patient/:id', getPatientByPatientId);
router.patch('/patient', updatePatient);
router.delete('/patient/:id', deletePatient);

module.exports = router;