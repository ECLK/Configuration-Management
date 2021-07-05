const express = require('express');
const router = express.Router();
const pollingStation = require('../controllers/polling_station_controller');
const auth_route = require('../middlewares/auth.middleware');

router.get('/', auth_route.veryfyToken, pollingStation.find);

module.exports  = router;