const express = require('express');
const router = express.Router();
const party = require('../controllers/party_controller')

router.get('/', party.find);
router.get('/nomination', party.findAllNomination);

module.exports  = router;