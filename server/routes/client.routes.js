const ClientController = require('../controllers/client.controller');
const ProgramController = require('../controllers/program.controller');
const router = require('express').Router();

// create and index routes
router.route('/clients')
    .get(ClientController.getClients)
    .post(ClientController.newClient);

// update and read routes
router.route('/clients/:id')
    .get(ClientController.findClientById)
    .put(ClientController.checkVersion, ClientController.updateClient);

// route for client specific programs
router.route('/clients/:id/programs')
    .get(ProgramController.getProgramsByClient);

module.exports = router;
