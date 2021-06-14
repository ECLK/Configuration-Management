const express = require('express');
const router = express.Router();
const seats = require('../controllers/seats_controller')

router.get('/', seats.find);

module.exports  = router;