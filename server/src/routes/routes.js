const router = require('express').Router();

const feedbackController = require('../controllers/feedbackController');
const goshoFeedbackController = require("../controllers/goshoFeedbackController");
const toshoFeedbackController = require('../controllers/toshoFeedbackController');
const peshoFeedbackController = require('../controllers/peshoFeedbackController');
const tomiFeedbackController = require('../controllers/tomiFeedbackController');
const therFiveController = require('../controllers/therFiveController');
const userController = require('../controllers/userController');
const employeeController = require('../controllers/employeeController');


router.use('/feedbacks', feedbackController);
router.use('/goshofeedbacks', goshoFeedbackController);
router.use('/toshofeedbacks', toshoFeedbackController);
router.use('/peshofeedbacks', peshoFeedbackController);
router.use('/tomifeedbacks', tomiFeedbackController);
router.use('/therfivefeedbacks', therFiveController);
router.use('/employees', employeeController);
router.use('/users', userController);


module.exports = router;