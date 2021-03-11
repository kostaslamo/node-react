// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');

const api = require('./routes/api');

const app = express();

// Use cors middleware to send response headers back to browser that allowes requests from all origins(CORS allow)
app.use(cors());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
  }),
);
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/docs', express.static(`${__dirname}/../docs`));

// Routes
app.use('/api', api);

const server = http.createServer(app);

module.exports = server;
