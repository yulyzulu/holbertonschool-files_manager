const { MongoClient } = require('mongodb');

const HOST = process.env.DB_HOST || 'localhost';
const PORT = process.env.DB_PORT || 27017;
const DATABASE = process.env.DB_DATABASE || 'files_manager';
const URI = `mongodb://${HOST}:${PORT}`;


class DBClient {
  constructor() {
    //const HOST = process.env.DB_HOST || 'localhost';
    //const PORT = process.env.DB_PORT || 27017;
    //const DATABASE = process.env.DB_DATABASE || 'files_manager';
    //const URI = `mongodb://${HOST}:${PORT}`;

    //this.client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });

    MongoClient.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
      if (!err) {
        this.db = client.db(DATABASE);
        this.usersCollection = this.db.collection('users');
        this.filesCollection = this.db.collection('files');
      } else {
        console.log(err);
        //this.db = false;
      }
    });
  }

  isAlive() {
    return !!this.db;
  }

  async nbUsers() {
    return this.usersCollection.countDocuments();
  }

  async nbFiles() {
    return this.filesCollection.countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
