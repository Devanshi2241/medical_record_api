const mongoose = require('mongoose');

//const User = require("./userModel.js");

const RecordSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nameOfDisease:{type:String,required:true,trim:true},
    to:{type:Date,required:true},
    from:{type:Date,required:true},
    Notes: {type:String },
    
});

module.exports = mongoose.model('Record', RecordSchema);