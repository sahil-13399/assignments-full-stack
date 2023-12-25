const jwt = require('jsonwebtoken')
const {User} = require('../db/index')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const {Authorization} = req.headers;
    const decoded = jwt.decode(Authorization, "secret");
    const result = User.exists({"username" : decoded.username});
    req.headers.username = decoded.username;
    if(result == null) {
        return res.status(403).json({"error" : "Invalid User"});
    }
    next();
}

module.exports = userMiddleware;