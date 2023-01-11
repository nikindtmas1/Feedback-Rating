const User = require('../models/userLoginModel');

const { createAccessToken, createRefreshToken } = require('../utils/jwtUtils');
const bcriptUtils = require('../utils/bcriptUtils');

exports.login = async ({username, password}) => {
    const currUser = username;
    const currPass = password;

    const user = await User.findByUsername(currUser);

    if (!user) throw new Error("Invalid username!");
    const valide = await bcriptUtils.verifyPass(currPass, user.password);
    if (!valide) throw new Error("Invalid password!");
    // if(user.password !== currPass) throw new Error("Invalid password!");

    if(user.username === currUser){
        const accessToken = await createAccessToken(user);
        const refreshToken = await createRefreshToken(user);

          user.accessToken = accessToken;
          user.refreshToken = refreshToken;
          await user.save();
      
          return {user, accessToken, refreshToken};
    };

};

exports.register = async ({username, password}) => {
    const currUser = username;
    const currPass = password;

    const user = await User.findByUsername(currUser);

    if(!user){
        try {
            const hashPassword = await bcriptUtils.genHashPassword(currPass);
            const username = currUser;
            const password = hashPassword
            const user = new User({username, password});
            user.save();
        } catch (error) {
            res.json({type: 'error',
            message: error.message})
        }
       
    }else{
        throw new Error('User name already exists!')
    }

};