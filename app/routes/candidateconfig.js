const express = require('express');
const router = express.Router();
const candidareConfig = require('../controllers/candidate_config_controller')
const auth_route = require('../middlewares/auth.middleware');

router.get('/candidate', auth_route.veryfyToken, candidareConfig.findCandidateConfig);
router.get('/supportdoc', auth_route.veryfyToken, candidareConfig.findSupportDocument);

module.exports  = router;

