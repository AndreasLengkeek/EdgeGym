const ClientController = require('../controllers/client.controller');
const ProgramController = require('../controllers/program.controller');
const router = require('express').Router();


router.route('/clients')
    .get(ClientController.getClients)
    .post(ClientController.newClient);

router.route('/clients/:id')
    .get(ClientController.findClientById)
    .put(ClientController.checkVersion, ClientController.updateClient);

router.route('/clients/:id/programs')
    .get(ProgramController.getProgramsByClient);

module.exports = router;
