const express = require('express');
const router = express.Router();
const electionTemplate = require('../controllers/election_template_controller')

router.get('/', electionTemplate.findElectionTemplate);

module.exports  = router;