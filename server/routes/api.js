const express = require('express');

const checkHealth = require('./checkHealth');

const router = express.Router();

/**
 * Routes with public access
 */
router.use('/checkHealth', checkHealth);

/**
 * Routes protected with user authentication
 */

module.exports = router;
