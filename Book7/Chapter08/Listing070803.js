import { MongoClient } from 'mongodb';

import { dbConfig } from './db-config.js';
const { url, dbName } = dbConfig;
const client = new MongoClient(url);
async function app() {
  try {
    await client.connect();
    console.log('Connected to the server.');
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
}
app();
