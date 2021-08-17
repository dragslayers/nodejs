const SoftSkill = require("../models/SoftSkill")

exports.getSoftSkill = (req, res, next) => {
    SoftSkill.find().then(softskills => res.status(200).json(softskills));
}

exports.postSoftSkill = (req, res, next) => {
    const softskill = new SoftSkill({...req.body})
    softskill.save().then(()=>res.status(201).json({message:"compétence générales enregistré"}))
    .catch(error=>res.status(400).json(error));
};

exports.putSoftSkill = (req, res, next) => {
    SoftSkill.updateOne(
        {_id:req.params.id},
        {...req.body,_id:req.params.id}
    )
    .then(()=>res.status(200).json({message:"formation modifié petit"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.deleteSoftSkill = (req, res, next) => {
    SoftSkill.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({message:"formation supprimé fiote"}))
    .catch((error)=>res.status(400).json({error}));
};
