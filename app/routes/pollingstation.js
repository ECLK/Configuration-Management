const express = require('express');
const router = express.Router();
const pollingStation = require('../controllers/polling_station_controller')

router.get('/', pollingStation.find);

module.exports  = router;