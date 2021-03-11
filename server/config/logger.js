const winston = require('winston');
const path = require('path');

const myformat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.prettyPrint(),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
);

const fileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf((info) => JSON.stringify({ timestamp: info.timestamp, level: info.level, message: info.message })),
);

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: myformat,
    }),
    new winston.transports.File({ format: fileFormat, filename: path.join(`${global.ROOT_DIR}/logs`, 'error.log'), level: 'error' }),
    new winston.transports.File({ format: fileFormat, filename: path.join(`${global.ROOT_DIR}/logs`, 'warn.log'), level: 'warn' }),
    new winston.transports.File({ format: fileFormat, filename: path.join(`${global.ROOT_DIR}/logs`, 'info.log'), level: 'info' }),
    new winston.transports.File({ format: fileFormat, filename: path.join(`${global.ROOT_DIR}/logs`, 'combined.log') }),
  ],
});

module.exports = logger;
