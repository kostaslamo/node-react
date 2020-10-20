require('dotenv').config({ path: `${__dirname}/../.env` });

// Import modules
const express = require('express');
const bodyParser = require('body-parser');

const { port, allowedOrigins } = require('./config/keys');
const api = require('./routes/api');

global.logger = require('./config/logger');

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: false,
  }),
);
app.use(bodyParser.json({ limit: '50mb' }));

/**
 * Checking if incoming request comes from allowed origins, if yes pass to headers the allow-origin header with the origins domain
 */
app.use((req, res, next) => {
  const requestOrigin = req.headers.origin;
  if (allowedOrigins.includes(requestOrigin)) {
    res.header('Access-Control-Allow-Origin', requestOrigin); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }
  next();
});

// Routes
app.use('/api', api);

app.listen(port, () => global.logger.info(`Server up and running in ${process.env.NODE_ENV === 'production' ? 'production' : 'development'} mode, on port ${port} !`));
