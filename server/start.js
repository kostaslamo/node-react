const dotEnv = require('dotenv');
const fs = require('fs');
const path = require('path');

const dotEnvFilePath = path.resolve(`${__dirname}/../.env`);
if (process.env.NODE_ENV !== 'prodcution' && !fs.existsSync(dotEnvFilePath)) fs.copyFileSync(`${__dirname}/../sample.env`, dotEnvFilePath);
if (process.env.NODE_ENV !== 'prodcution' && fs.existsSync(dotEnvFilePath)) dotEnv.config({ path: dotEnvFilePath });
global.ROOT_DIR = __dirname;

const { port = 8080 } = require('./config/keys');
const server = require('./server');

global.logger = require('./config/logger');

server.listen(port, () => global.logger.info(`Server up and running in ${process.env.NODE_ENV === 'production' ? 'production' : 'development'} mode, on port ${port} !`));
