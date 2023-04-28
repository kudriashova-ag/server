const express = require('express');
const ProductCtrl = require('../controllers/product-controller');

const router = express.Router();

router.get('/products', ProductCtrl.getProducts);
router.get('/products/:id', ProductCtrl.getProductById);
router.post('/products', ProductCtrl.addProduct);
router.patch('/products/:id', ProductCtrl.updateProduct)
router.delete('/products/:id', ProductCtrl.removeProduct)
router.get('/products/index.html', ProductCtrl.getProducts)

module.exports = router;



