const express = require('express');
const ClientController = require('../controllers/client.controller');
const router = express.Router();


router.route('/clients')
    .get(ClientController.getClients)
    .post(ClientController.newClient);

module.exports = router;
