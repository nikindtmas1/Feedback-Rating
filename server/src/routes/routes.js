const router = require('express').Router();

const feedbackController = require('../controllers/feedbackController');

router.use('/feedbacks', feedbackController);

module.exports = router;