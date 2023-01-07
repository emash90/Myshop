const router = require('express').Router();
const { registerUser, loginUser, updateUser } = require('../controllers/authController');
const { verifyToken, verifyTokenAndAuthorization }   = require('../middlewares/authMiddleware');

//register new users

router.post('/register', registerUser);

//login users

router.post('/login', loginUser);

//EDIT USER

router.put('/:id', verifyTokenAndAuthorization, updateUser);

module.exports = router;