const router = require('express').Router();

const feedbackController = require('../controllers/feedbackController');
const goshoFeedbackController = require("../controllers/goshoFeedbackController");

router.use('/feedbacks', feedbackController);
router.use('/goshoFeedbacks', goshoFeedbackController);

module.exports = router;