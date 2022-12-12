const router = require('express').Router();

const feedbackController = require('../controllers/feedbackController');
const goshoFeedbackController = require("../controllers/goshoFeedbackController");
const toshoFeedbackController = require('../controllers/toshoFeedbackController');
const peshoFeedbackController = require('../controllers/peshoFeedbackController');


router.use('/feedbacks', feedbackController);
router.use('/goshofeedbacks', goshoFeedbackController);
router.use('/toshofeedbacks', toshoFeedbackController);
router.use('/peshofeedbacks', peshoFeedbackController);

module.exports = router;