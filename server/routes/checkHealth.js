const express = require('express');
const { route } = require('./api');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'API is up and running!' });
});

module.exports = router;
