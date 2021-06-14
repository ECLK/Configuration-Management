const express = require('express');
const router = express.Router();
const election = require('../controllers/election_controller')

router.get('/', election.find);

module.exports  = router;