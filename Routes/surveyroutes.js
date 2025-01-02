const express = require('express');
const {submitForm, getSubmissions} = require('../controller/surveycontroller');

const router = express.Router()


router.post('/submit-form', submitForm);
router.get('/submissions', getSubmissions);

module.exports = router;
