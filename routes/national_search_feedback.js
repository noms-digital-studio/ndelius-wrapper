const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('national_search_feedback', {baseUrl: process.env.NEW_TECH_BASE_URL});
});

module.exports = router;
