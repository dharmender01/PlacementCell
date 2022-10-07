//Database Connection File

const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://SafaidAnsari:iBcR2P7fTHF4UZBx@cluster0.vmqnisk.mongodb.net/PlacementCell");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB:"));
db.once('open', function(){
    console.log('Connected to Database ');
});


module.exports = db;