const User = require('../models/Users');



const registerUser = async (req, res) => {
  const { name, email, password, username } = req.body;
  //check if user exists
  const user = await User.findOne({ email });
    if (user) {
        res.status(400);
        throw new Error('User already exists');
        } else {
        const user = await User.create({
            username,
            name,
            email,
            password,
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


module.exports = registerUser;
