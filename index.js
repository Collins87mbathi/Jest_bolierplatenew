const app  = require('./server');
const express =  require('express');
const DATABASE = require('./Database/connect');
const dotenv  = require('dotenv');
const UserRouter = require('./routers/User');

dotenv.config();

app.use(express.json())

// Database Connection
DATABASE(process.env.MONGO_URL);

app.get('/', (req,res)=> {
 res.send("this is a blog site");
});

//routers
app.use('/user', UserRouter);

app.listen(5000, ()=> {
 console.log("server is running");
});