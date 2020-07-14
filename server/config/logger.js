const winston = require('winston');

const myformat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
);

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: myformat,
    }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'warn.log', level: 'warn' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports = logger;
