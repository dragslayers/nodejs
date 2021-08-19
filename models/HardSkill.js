const mongoose = require("mongoose");
const hardskillSchema = mongoose.Schema({

    name:{type:String, required:true},
    description:{type:String, required:true},
    userId:{type:String, required:true},
    
})

module.exports=mongoose.model("HardSkill", hardskillSchema);