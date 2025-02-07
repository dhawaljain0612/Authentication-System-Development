const jwt= require("jsonwebtoken");
const { jwt_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedvalue= jwt.verify(jwtToken,jwt_SECRET);
    if(decodedvalue.username){
        req.username=decodedvalue.username;
        next();
    }else{
        res.status(403).json({
            msg:"you are not authenticated"
        })
    }

}

module.exports = userMiddleware;