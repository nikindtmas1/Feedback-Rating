const jwt = require('jsonwebtoken');
// const { development } = require('../config/config');

// const secretAccess = development.secretStr;

// function auth(req, res, next) {
//     // const token = req.headers['X-Authorization'];

//     if(token){
//         const decodetToken = jwt.verify(token, secretAccess)
//         if(decodetToken){
//             req.user = decodetToken;
//             res.status(300)
//             next();
//         }else{
//             res.status(401)
//         }
//     }else{
//         next();
//     }
// }

function isAuth(req, res, next) {
    // console.log(req.headers["Content-Type"]);
    if(!req.user){
        return res.status(401)
    };

    next();
};

function isGuest(req, res, next) {
   
    if(!req.user){
        next();
    };
};

module.exports = {

    isAuth,
    isGuest,
};