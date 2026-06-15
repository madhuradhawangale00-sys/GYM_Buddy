const erxpress = require('express');

//User Controller functions
const { signupUser, loginUser } = require('../controllers/userController');


const router = erxpress.Router()

//login routes
router.post('/login',loginUser)

//signup route
router.post('/signup',signupUser)


module.exports = router;