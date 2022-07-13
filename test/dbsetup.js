const mongoose = require('mongoose');



// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, './.env') });
 /**
  * connect to the in-memory database.
  */

 module.exports.connect = async () => {
  await mongoose.connect("mongodb+srv://collinsm:0791686851@cluster0.xszl2nd.mongodb.net/?retryWrites=true&w=majority")
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


