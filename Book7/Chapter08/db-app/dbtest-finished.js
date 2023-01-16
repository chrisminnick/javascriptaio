import { MongoClient } from 'mongodb';
import { dbConfig } from './db-config.js';
const { url, dbName } = dbConfig;
const client = new MongoClient(url);
async function app() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);
    // Use the collection "people"
    const col = db.collection('people');
    // Construct a document
    let personDocument = {
      name: { first: 'Alan', last: 'Turing' },
      birth: new Date(1912, 5, 23), // June 23, 1912
      death: new Date(1954, 5, 7), // June 7, 1954
      contribs: ['Turing machine', 'Turing test', 'Turingery'],
    };
    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(personDocument);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  }
  // Close connection
  client.close();
}
app().catch(console.dir);
