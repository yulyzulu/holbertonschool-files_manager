const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

function getStatus(req, res) {
  if (redisClient.isAlive() && dbClient.isAlive()) {
    res.status(200).json({ redis: true, db: true });
  }
}

function getStats(req, res) {
  const users = dbClient.nbUsers();
  const files = db.nbFiles();
  res.status(200).json({ users: users, files: files });
}

module.exports = { getStatus, getStats };
