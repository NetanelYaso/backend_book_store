const mongoose = require("mongoose");
const STRING_CONNECTION = process.env.CONNECTION_STRING;

mongoose.connect(STRING_CONNECTION, {
    userUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err));

module.exports = mongoose.connection;