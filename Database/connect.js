const mongoose = require("mongoose");

const DATABASE = (url) => {

mongoose.connect(url).then(()=>{
 console.log("database connected");
}).catch((error) => {
    console.log(error);
})

}

module.exports = DATABASE;