// Middleware for handling auth
const jwt = require('jsonwebtoken')
const {Admin} = require('../db/index')

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {authorization} = req.headers;
    const decoded = jwt.decode(authorization, "secret");
    if(decoded == null) {
        return res.status(403).json({"error" : "You do not have access to admin module"});
    }
    const result = Admin.exists({"username" : decoded.username});
    if(result == null) {
        return res.status(403).json({"error" : "You do not have access to admin module"});
    }
    next();
}

module.exports = adminMiddleware;