'use strict'
var Mongoose = require('mongoose')
const uri = process.env.PHYSIOAPP_MONGODB_URI ||
"mongodb://localhost:27017/physioApp";
mongoose.connect(process.env.MONGODB_URI, );
    
    //Connect to MongoDB
    Mongoose.connect(uri, { useNewUrlParser: true }, function (err) {
    if (err) {
    console.log("DB Error: ", err);
    process.exit(1);
    } else {
    console.log('MongoDB Connected');
    }
    });
    exports.Mongoose = Mongoose;
