const JWT = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).json("Access Denied");

    try {
        const split_token = token.split(" ")[1]
        const verified = JWT.verify(split_token, process.env.SECRET_KEY);
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(400).json("Invalid Token");
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user._id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that! loging in as admin or contact admin");
        }
    });
}

module.exports = { verifyToken, verifyTokenAndAuthorization };