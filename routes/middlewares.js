// const { is } = require('sequelize/types/lib/operators');

//로그인 중이면 req.isAuthenticated()가 true고 아니면 false
exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    } else{
        res.status(403).send('로그인 필요');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        next();
    } else {
        res.redirect('/');
    }
};