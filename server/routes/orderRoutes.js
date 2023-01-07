const { getAllOrders, getOrderById, createOrder, updateOrder } = require('../controllers/orderControllers');

const router = require('express').Router();



router.get('/', getAllOrders);

router.get('/:orderId', getOrderById);

router.post('/create', createOrder);

router.put('/:orderId', updateOrder);


module.exports = router;