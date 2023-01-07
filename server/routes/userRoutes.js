const { getAllUsers, getUserById } = require('../controllers/userController');
const { verifyTokenAndAuthorization } = require('../middlewares/authMiddleware');

const router = require('express').Router();


router.get('/', verifyTokenAndAuthorization, getAllUsers);

router.get('/:id', getUserById);





module.exports = router;