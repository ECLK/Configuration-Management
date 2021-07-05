const express = require('express');
const router = express.Router();
const seats = require('../controllers/seats_controller');
const auth_route = require('../middlewares/auth.middleware');

router.get('/', auth_route.veryfyToken, seats.find);
router.get('/nomination', auth_route.veryfyToken, seats.findSeatsNomination);

module.exports  = router;