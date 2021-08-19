const HardSkill = require("../models/HardSkill")

exports.getHardSkill = (req, res, next) => {
    HardSkill.find({userId:req.params.userId}).then(hardskills => res.status(200).json(hardskills));
};

exports.postHardSkill = (req, res, next) => {
    const hardskill = new HardSkill({...req.body})
    hardskill.save().then(()=>res.status(201).json({message:"compétence technique enregistrée"}))
    .catch(error=>res.status(400).json(error));
};

exports.putHardSkill = (req, res, next) => {
    HardSkill.updateOne(
        {_id:req.params.id},
        {...req.body,_id:req.params.id}
    )
    .then(()=>res.status(200).json({message:"compétence technique modifié"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.deleteHardSkill = (req, res, next) => {
    HardSkill.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({message:"compétence technique supprimé"}))
    .catch((error)=>res.status(400).json({error}));
};