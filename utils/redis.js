import redis from 'redis';
import { promisify } from 'util';

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.getAsync = promisify(this.client.get).bind(this.client);

    this.client.on('connect', function() {
      //console.log('Connected server');
    });

    this.client.on('error', function(error) {
      console.error(error);
    });
  }

  isAlive() {    
    if (this.client.connected) {
      return true;
    } else {
      return false;
    }
  }

  async get(key) {
    return this.getAsync(key);
  }
  async set(key, value, time) {
    this.client.setex(key, time, value);
  }

  async del(key) {
    this.client.del(key);
  }
}

const redisClient = new RedisClient();
export default redisClient;