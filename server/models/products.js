const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    color: {
        type: String,
        trim: true,
    },
    size: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    countInStock: {
        type: Number,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        trim: true,
    },
}, { timestamps: true });


const Product = mongoose.model('Product', productSchema);

module.exports = Product;