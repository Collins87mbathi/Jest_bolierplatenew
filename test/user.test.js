const mongoose = require('mongoose');

const dbHandler = require('./dbsetup');
const userModel = require('../Models/User');

const postData = { email: 'collins87@gmail.com', password: '0791686851'};
/**
 * Connect to a new in memory database before running any tests
 */

beforeAll(async () => await dbHandler.connect());

/**
 * Clear all the test data after every test.
 */

afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */

afterAll(async () => await dbHandler.closeDatabase());


/**
 * Creating user and its going to be awesome 
 */
describe('add a User', () =>   {

 it('add a User' , async () => {
    jest.setTimeout(10 * 1000);
  const validUser = new userModel(postData);
  const savedUser = await validUser.save();
  expect(savedUser._id).toBeDefined();
  expect(savedUser.email).toBe(postData.email);
  expect(savedUser.password).toBe(postData.password);
 });

})
