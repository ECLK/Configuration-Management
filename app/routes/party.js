const express = require('express');
const router = express.Router();
const party = require('../controllers/party_controller');
const auth_route = require('../middlewares/auth.middleware');

router.get('/', party.find);
router.get('/nomination', auth_route.veryfyToken, party.findAllNomination);

module.exports  = router;