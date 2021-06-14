const express = require('express');
const router = express.Router();
const dummy = require('../controllers/dummy_controller')

router.get('/', dummy.create);

module.exports  = router;