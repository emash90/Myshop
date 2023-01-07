const { getAllCarts, getCartById, createCart, updateCart } = require('../controllers/cartControllers');

const router = require('express').Router();

router.get('/', getAllCarts);

router.get('/:cartId', getCartById);

router.post('/create', createCart);

router.put('/:cartId', updateCart);





module.exports = router;