function isAuth(req, res, next) {
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