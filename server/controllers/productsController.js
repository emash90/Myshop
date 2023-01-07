const Product = require('../models/Products');


//get all products

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).sort({ createdAt: -1 });
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//get product by id

const getProductById = async (req, res) => {
    const { productsId } = req.params;
    try {
        const product = await Product.findById(productsId);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//create product

const createProduct = async (req, res) => {
    const { name, price, description, category, image, color, countInStock, size, rating } = req.body;
    try {
        const product = await Product.create({
            name,
            price,
            description,
            category,
            color,
            size,
            countInStock,
            rating,
            image,
        });
        if (product) {
            res.status(201).json({
                _id: product._id,
                name: product.name,
                price: product.price,
                description: product.description,
                category: product.category,
                price: product.price,
                color: product.color,
                size: product.size,
                countInStock: product.countInStock,
                rating: product.rating,
                image: product.image,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//update product

const updateProduct = async (req, res) => {
    const { productsId } = req.params;
    const { name, price, description, category, image, color, countInStock, size, rating } = req.body;
    try {
        const product = await Product.findById(productsId);
        if (product) {
            product.name = name;
            product.price = price;
            product.description = description;
            product.category = category;
            product.image = image;
            product.color = color;
            product.countInStock = countInStock;
            product.size = size;
            product.rating = rating;
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
}
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}


module.exports = { getAllProducts, getProductById, createProduct, updateProduct };