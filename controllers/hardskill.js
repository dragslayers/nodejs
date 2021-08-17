const HardSkill = require("../models/HardSkill")

exports.getHardSkill = (req, res, next) => {
    HardSkill.find().then(hardskills => res.status(200).json(hardskills));
};

exports.postHardSkill = (req, res, next) => {
    const hardskill = new HardSkill({...req.body})
    hardskill.save().then(()=>res.status(201).json({message:"compétence technique enregistré"}))
    .catch(error=>res.status(400).json(error));
};

exports.putHardSkill = (req, res, next) => {
    HardSkill.updateOne(
        {_id:req.params.id},
        {...req.body,_id:req.params.id}
    )
    .then(()=>res.status(200).json({message:"formation modifié petit"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.deleteHardSkill = (req, res, next) => {
    HardSkill.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({message:"formation supprimé fiote"}))
    .catch((error)=>res.status(400).json({error}));
};