const router = require('express').Router();

const feedbackController = require('../controllers/feedbackController');

router.use('/feedback', feedbackController);

module.exports = router;