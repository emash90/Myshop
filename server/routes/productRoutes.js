const { getAllProducts, createProduct, getProductById, updateProduct } = require('../controllers/productsController');
const { verifyTokenAndAuthorization } = require('../middlewares/authMiddleware');

const router = require('express').Router();

//get all products

router.get('/', getAllProducts);

//get product by id

router.post('/:productsId', getProductById);

//create product

router.post('/create', createProduct);

//update product

router.put('/:productsId',  updateProduct);



module.exports = router;