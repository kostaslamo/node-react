const express = require('express');

const checkHealth = require('./checkHealth');

const router = express.Router();

const requestLoggerMiddleware = (req, res, next) => {
  global.logger.info(`REQ.${req.method}@${req.originalUrl}`);
  next();
};

/**
 * Routes with public access
 */
router.use('/checkHealth', requestLoggerMiddleware, checkHealth);

/**
 * Routes protected with user authentication
 */

module.exports = router;
