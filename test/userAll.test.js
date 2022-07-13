const dbHandler = require('./dbsetup');
const userModel = require('../Models/User');
const request = require("supertest");
const app = require('../server');


beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());


describe('get  users',  () => {

 it('get users' , async() => {
    jest.setTimeout(10 * 1000);
  await userModel.find();
 const res = await request(app).get('/');
 expect(res.statusCode).toBe(404);

 },10000);     
});