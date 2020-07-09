module.exports = {
  apps: [
    {
      name: 'NODE-BACKEND',
      script: 'server.js',
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        PORT: 8080,
        NODE_ENV: 'production',
      },
    },
  ],
};
