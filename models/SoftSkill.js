const mongoose = require("mongoose");
const softskillSchema = mongoose.Schema({

    name:{type:String, required:true},
    description:{type:String, required:true},
    userId:{type:String, required:true},
  
})

module.exports=mongoose.model("SoftSkill", softskillSchema);