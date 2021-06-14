const express = require('express');
const router = express.Router();
const party = require('../controllers/party_controller')

router.get('/', party.find);

module.exports  = router;