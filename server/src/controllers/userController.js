const express = require('express');
const router = express.Router();

const service = require('../services/userService');
const { isGuest } = require('../middleware/authMidd');

router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        const {user, accessToken, refreshToken} = await service.register({username, password});
        res.json({
            _id: user._id,
        username: user.username,
        accessToken,
        refreshToken,
        })
        
    } catch (error) {
        
    }

   
});

router.post('/login',isGuest, async (req, res) => {
    const {username, password} = req.body;

   const {user, accessToken, refreshToken} = await service.login({username, password});

    res.json({
        _id: user._id,
        username: user.username,
        accessToken,
        refreshToken,
    });
});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
  });

module.exports = router;