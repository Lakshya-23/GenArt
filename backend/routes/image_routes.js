const express = require('express')
const {generateImage,updateCredits} = require('../controller/image_routes');
const protectRoute = require('../middlewares/auth_middle');
const router = express.Router();


router.post('/generate-image',protectRoute,generateImage)
router.post('/updateCredits',updateCredits)

module.exports = router;