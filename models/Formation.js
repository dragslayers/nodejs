const mongoose = require("mongoose");
const formationSchema = mongoose.Schema({

    title:{type:String, required:true},
    description:{type:String, required:true},
    school:{type:String, required:true},
    date:{type:String, required:true},
})

module.exports=mongoose.model("Formation", formationSchema);