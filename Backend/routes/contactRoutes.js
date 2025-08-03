const express = require('express');
const { processContactForm } = require('../controllers/contactController');

const router = express.Router();

router.post('/contact', processContactForm);

module.exports = router;