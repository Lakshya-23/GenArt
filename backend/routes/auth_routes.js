const express = require('express')

const router = express.Router();
const {signin,signup,userCredits,checkAuthUser, logout} =  require('../controller/auth_routes');
const protectRoute = require('../middlewares/auth_middle');

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/logout',logout)
router.get('/credits',protectRoute,userCredits)
router.get('/check',protectRoute,checkAuthUser)

module.exports = router;