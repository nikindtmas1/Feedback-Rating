const bcript = require('bcrypt');

async function genHashPassword(password) {
    const saltRound = 10;
    const currentPass = password;

   return bcript.genSalt(saltRound)
    .then((salt) => {
        return bcript.hash(currentPass, salt)
    })
}

async function verifyPass(password) {
    
}

module.exports = {
    genHashPassword,
    verifyPass,
}