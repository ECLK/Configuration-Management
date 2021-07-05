const express = require('express');
const router = express.Router();
const dummy = require('../controllers/dummy_controller');
const auth_route = require('../middlewares/auth.middleware');

router.get('/', auth_route.veryfyToken, dummy.create);

module.exports  = router;