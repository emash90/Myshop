const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const bodyParser = require('body-parser');


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});


const app = express();

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/', authRoutes);
app.use('/api/v1/product', productRoutes);
