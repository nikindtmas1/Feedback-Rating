const router = require('express').Router();

const feedbackController = require('../controllers/feedbackController');
const goshoFeedbackController = require("../controllers/goshoFeedbackController");

router.use('/feedbacks', feedbackController);
router.use('/goshofeedbacks', goshoFeedbackController);

module.exports = router;