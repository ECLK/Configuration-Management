const express = require('express');
const router = express.Router();
const electionTemplate = require('../controllers/election_template_controller')
const auth_route = require('../middlewares/auth.middleware');

router.get('/', auth_route.veryfyToken, electionTemplate.findElectionTemplate);

module.exports  = router;