const jwt = require('jsonwebtoken');
const User = require("./userModel.js");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const cookie = req.headers.cookie.nToken
        //console.log(cookie)
        const decoded = jwt.verify(token, process.env.JWT_KEY);
       
        const user= User.findOne({email:decoded.email})
        //console.log(user.firstname)
        req.token = token;
        req.user = user;
      //  console.log(user)
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};