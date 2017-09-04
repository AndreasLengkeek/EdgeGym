const express = require('express');
const ClientController = require('../controllers/client.controller');
const router = express.Router();


router.route('/clients').get(ClientController.getClients);
router.route('/clients').post(ClientController.newClient);

module.exports = router;
