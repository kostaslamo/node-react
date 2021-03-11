module.exports = {
  apps: [
    {
      name: 'NODE-BACKEND',
      script: 'start.js',
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
};
