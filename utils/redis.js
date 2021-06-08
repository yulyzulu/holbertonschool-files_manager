import redis from 'redis';
import { promisify } from 'util';

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.getAsync = promisify(this.client.get).bind(this.client);

    this.client.on('error', function(error) {
      console.error(error);
    });

    this.client.on('connect', function() {
      //console.log('Connected server');
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
    const val = await this.getAsync(key);
    return val;
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
