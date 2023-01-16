const { getAllProducts, createProduct, getProductById, updateProduct } = require('../controllers/productsController');
const { verifyTokenAndAuthorization } = require('../middlewares/authMiddleware');

const router = require('express').Router();

//get all products

router.get('/', getAllProducts);

//get product by id

router.get('/:productsId', getProductById);

//create product

router.post('/create', createProduct);

//update product

router.patch('/:productsId',  updateProduct);



module.exports = router;