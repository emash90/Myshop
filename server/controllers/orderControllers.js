const Order = require('../models/order');

//get all orders

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//get order by id

const getOrderById = async (req, res) => {
    const { orderId } = req.params;
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            res.status(404).json({ message: "Order not found" });
        }
        res.json(order);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//create order

const createOrder = async (req, res) => {
    const { userId, products } = req.body;
    try {
        const order = await Order.create({
            userId,
            products
        });
        if (order) {
            res.status(201).json({
                _id: order._id,
                userId: order.userId,
                products: order.products,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//update order

const updateOrder = async (req, res) => {
    const { orderId } = req.params;
    const { userId, products } = req.body;
    try {
        const order = await Order.findByIdAndUpdate(orderId, { userId, products }, { new: true });
        if (order) {
            res.status(200).json({
                _id: order._id,
                userId: order.userId,
                products: order.products,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}


module.exports = { getAllOrders, getOrderById, createOrder, updateOrder };