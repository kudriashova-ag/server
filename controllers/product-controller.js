const Product = require('../models/product');

const getProducts = async (req, res) => { 
  const products = await Product.find({});
  res.send(products);
}

const getProductById = async (req, res)=>{ 
  let id = req.params.id;
  const product = await Product.findById(id);
  res.send(product);
}

const addProduct = async (req, res) => {
  let data = req.body;
  try {
    const product = new Product(data);
    await product.save();
    res.status(201).json({
      id: product._id
    });
  }
  catch (err) { 
    res.status(400).json({err});
  }
}

const updateProduct = async (req, res) => {
  let data = req.body;
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, data);
    await product.save();
    res.status(201).json({
      id: product._id
    });
  }
  catch (err) {
    res.status(400).json({ err });
  }
}


const removeProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(202).json({
      id: product._id
    });
  }
  catch (err) {
    res.status(400).json({ err });
  }
}


module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  removeProduct
}