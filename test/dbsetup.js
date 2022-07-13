const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
 /**
  * connect to the in-memory database.
  */

 module.exports.connect = async () => {
  await mongoose.connect(process.env.MONGO_URL)
   .then(() => console.log("DB connected!"))
   .catch(err => console.log(err));
 }

 module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
 }


/**
 * Remove all the data for all db collections.
 */

module.exports.clearDatabase = async () => {
 const collections = mongoose.connection.collections;

 for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
}


