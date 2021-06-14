const express = require('express');
const router = express.Router();
const countingcenter = require('../controllers/counting_center_controller')

router.get('/', countingcenter.find);

module.exports  = router;