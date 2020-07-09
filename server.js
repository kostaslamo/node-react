require('dotenv').config();

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { port } = require('./config/keys');

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

// Should be in the end of the file, after requiring all other routes so /api routes should be registered and not having problem making axios requests to API
// if (process.env.NODE_ENV === 'production') {
//   const root = path.join(__dirname, 'client', 'build');
//   app.use(express.static(root));
//   // Handles any requests that don't match the ones above serving react routes
//   app.get('*', (req, res) => {
//     res.sendFile('index.html', { root });
//   });
// }

app.listen(port, () => global.logger.info(`Server up and running in ${process.env.NODE_ENV === 'production' ? 'production' : 'development'} mode, on port ${port} !`));
