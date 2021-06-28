const express = require('express');
const router = express.Router();
const candidareConfig = require('../controllers/candidate_config_controller')

router.get('/candidate', candidareConfig.findCandidateConfig);
router.get('/supportdoc', candidareConfig.findSupportDocument);

module.exports  = router;