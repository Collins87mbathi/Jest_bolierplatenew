const User = require('../Models/User');


const CreateUser = async (req,res) => {
  
  try {
    // const {username , email, passwords} = req.body;
    const user = await new User({
      email: req.body.email,
        password : req.body.password,
    }); 

    const savedUser = await user.save();

    res.status(200).json(savedUser);

  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
}

const GetUsers = async (req,res) => {
  try {
    const user = await User.find(); 
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {CreateUser,GetUsers};