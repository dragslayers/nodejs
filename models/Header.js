const mongoose = require("mongoose");
const headerSchema = mongoose.Schema({
    name:{type:String, required:true},
    job:{type:String, required:true},
    phone:{type:String, required:true},
    mail:{type:String, required:true},
    portfolio:{type:String, required:true},
    userId:{type:String, required:true},
})

module.exports=mongoose.model("Header",headerSchema);