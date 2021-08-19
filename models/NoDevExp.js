const mongoose = require("mongoose");
const nodevexpSchema = mongoose.Schema({

    theme:{type:String, required:true},
    description:{type:String, required:true},
    job:{type:String, required:true},
    realization:{type:String, required:true},
    date:{type:String, required:true},
    userId:{type:String, required:true},
})

module.exports=mongoose.model("NoDevExp", nodevexpSchema);