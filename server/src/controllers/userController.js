const express = require('express');
const router = express.Router();

const service = require('../services/userService');
const { isGuest } = require('../middleware/authMidd');


router.post('/login',isGuest, async (req, res) => {
    let {username, password} = req.body;

   let {user, accessToken, refreshToken} = await service.login({username, password});

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