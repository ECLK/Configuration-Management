const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const auth_route = require('../middlewares/auth.middleware');

router.post('/register', user.create);
router.post('/signin', user.signIn);
router.post('/signinreftoken',auth_route.veryfyRefreshToken, user.signInWithToken);
router.get('/signout', auth_route.veryfyToken, user.signout )

module.exports  = router;