const express = require('express');
const router = express.Router();
const { submitFeedback, getAllFeedbacks } = require('../controllers/feedbackController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, submitFeedback);
router.get('/', getAllFeedbacks); 

module.exports = router;
