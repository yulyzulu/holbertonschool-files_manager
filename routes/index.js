const express = require('express');
const { getStatus, getStats } = require('../controllers/AppController');

const router = express.Router();

router.get('/', (req, res) => res.send('Hi'));

router.get('/status', (req, res) => {
  getStatus(req, res);
});

router.get('/stats', (req, res) => {
  getStats(req, res);
});

module.exports = router;
