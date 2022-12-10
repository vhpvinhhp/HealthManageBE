const userModel = require("../models/user.model");

async function verifyToken(req, res, next) {
    try {
        let token = null;
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { // Authorization: Bearer <userId>
            token = req.headers.authorization.split(' ')[1];
        }
        if (!token){
            return res.status(401).json({ status: 401, message: 'Authentication required' });
        }
        const user = await userModel.findById(token);
        req.userId = user._id;
        next();
    } catch (error) {
        return res.status(401).json({ status: 401, message: 'Authentication required' });
    }
    
}

module.exports = verifyToken;