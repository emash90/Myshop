const router = require('express').Router();
const registerUser = require('../controllers/authController');

//register new users

router.post('/register', registerUser);


module.exports = router;