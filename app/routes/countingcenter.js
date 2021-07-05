const express = require('express');
const router = express.Router();
const countingcenter = require('../controllers/counting_center_controller');
const auth_route = require('../middlewares/auth.middleware');

router.get('/', auth_route.veryfyToken,countingcenter.find);

module.exports  = router;