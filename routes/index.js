const express = require('express');
import { getStatus, getStats } from '../controllers/AppController';


function routes(app) {
  const router = express.Router();

  app.use('/', router);
  
  router.get('/status', (req, res) => {
    getStatus(req, res);    
  });

  router.get('/stats', (req, res) => {
    getStats(req, res);
  });
}
