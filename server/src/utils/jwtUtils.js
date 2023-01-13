const jwt = require('jsonwebtoken');
const { development } = require('../config/config');

const secretAccess = development.secretStr;

async function createAccessToken(user) {
    let payload = {
        _id: user._id,
        username: user.username
    };

    let options = {
        expiresIn: '1m'
    };

    let accessToken = await jwt.sign(payload, secretAccess,options);

    return accessToken;
};

async function createRefreshToken(user) {
    let payload = {
        _id: user._id
    };

    let options = {
        expiresIn: '2d'
    };

    let secretStrTwo = 'mnogoqkaparola2';

    let refreshToken = await jwt.sign(payload,secretStrTwo,options);
   

    return refreshToken;

};

module.exports = {
    createAccessToken,
    createRefreshToken,
};