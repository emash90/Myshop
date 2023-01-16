const User = require('../models/Users');
const cryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');


const registerUser = async (req, res) => {
  const { name, email, password, username } = req.body;
  //require email, name, username and password

    if (!(name) || !(email) || !(password) || !(username)) {
        res.status(400).json("ensure all fields and filled")
    }

  //check if user exists
  const user = await User.findOne({ email });
    if (user) {
        res.status(400).json("user already exists");
        } else {
        const user = await User.create({
            username,
            name,
            email,
            password: cryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString(),
        });
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                username: user.username,
                isAdmin: user.isAdmin,
                //token: generateToken(user._id),
            });
        }
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    if (!(username) || !(password)) {
        res.status(400).json("ensure all fields and filled")
    }
    const user = await User.findOne({ email: username });
    if (user) {
        const hashed_password = cryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const string_password = hashed_password.toString(cryptoJS.enc.Utf8)

        if (string_password === password) {
            const token = JWT.sign({
                _id: user._id,
                name: user.name,
                email: user.email,
                username: user.username,
                isAdmin: user.isAdmin,
            }, process.env.SECRET_KEY, { expiresIn: "1d" });

            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                username: user.username,
                isAdmin: user.isAdmin,
                token,
            });
        } else {
            res.status(400).json("invalid credentials")
        }
    } else {
        res.status(400).json("user does not exist")
    }
}

//EDIT USER

const updateUser = async (req, res) => {
    const { password } = req.body;

    try {
        const user = await User.findById(req.params.id);
        console.log(user._id)
        if (req.params.id === req.user._id || req.user.isAdmin) {
            if (password) { //if password is being changed
                req.body.password = cryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedUser);
        } else {
            res.status(403).json("You are not allowed to do that! You are not an admin!"); //if user is not an admin
        }
    } catch (err) {
        res.status(500).json(err);
    }
};


module.exports = { registerUser, loginUser, updateUser };
