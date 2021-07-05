const express = require('express');
const router = express.Router();
const election = require('../controllers/election_controller');
const auth_route = require('../middlewares/auth.middleware');

router.get('/', auth_route.veryfyToken, election.find);

module.exports  = router;