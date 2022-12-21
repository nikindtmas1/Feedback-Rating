const User = require('../models/userLoginModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { createAccessToken, createRefreshToken } = require('../utils/jwtUtils');

exports.login = async ({username, password}) => {
    const currUser = username;
    const currPass = password;

    const user = await User.findByUsername(currUser);

    if (!user) throw new Error("Invalid username!");
    // const valide = await bcrypt.compare(currPass, user.password);
    // if (!valide) throw new Error("Invalid password!");
    if(user.password !== currPass) throw new Error("Invalid password!");

    if(user.username === currUser){
        const accessToken = createAccessToken(user);
        const refreshToken = await jwt.sign({ _id: user._id }, "MOGYSHTSECRET2", {
            expiresIn: "1d",
          });

          user.refreshToken = refreshToken;
          await user.save();
      
          return {user, accessToken, refreshToken};
    };

};