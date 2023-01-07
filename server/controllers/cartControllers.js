const Cart = require('../models/cart');

//get all carts

const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find({}).sort({ createdAt: -1 });
        res.json(carts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//get cart by id

const getCartById = async (req, res) => {
    const { cartId } = req.params;
    try {
        const cart = await Cart.findById(cartId);
        if (!cart) {
            res.status(404).json({ message: "Cart not found" });
        }
        res.json(cart);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//create cart

const createCart = async (req, res) => {
    const { userId, products } = req.body;
    try {
        const cart = await Cart.create({
            userId,
            products
        });
        if (cart) {
            res.status(201).json({
                _id: cart._id,
                userId: cart.userId,
                products: cart.products,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//update cart

const updateCart = async (req, res) => {
    const { cartId } = req.params;
    const { userId, products } = req.body;
    try {
        const cart = await Cart.findByIdAndUpdate(cartId, { userId, products }, { new: true });
        if (!cart) {
            res.status(404).json({ message: "Cart not found" });
        }
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//delete cart

const deleteCart = async (req, res) => {
    const { cartId } = req.params;
    try {
        const cart = await Cart.findByIdAndDelete(cartId);
        if (!cart) {
            res.status(404).json({ message: "Cart not found" });
        }
        res.json({ message: "Cart deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}


module.exports = { getAllCarts, getCartById, createCart, updateCart, deleteCart };
