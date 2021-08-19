const SoftSkill = require("../models/SoftSkill")

exports.getSoftSkill = (req, res, next) => {
    SoftSkill.find({userId:req.params.userId}).then(softskills => res.status(200).json(softskills));
}

exports.postSoftSkill = (req, res, next) => {
    const softskill = new SoftSkill({...req.body})
    softskill.save().then(()=>res.status(201).json({message:"compétence générales enregistrées"}))
    .catch(error=>res.status(400).json(error));
};

exports.putSoftSkill = (req, res, next) => {
    SoftSkill.updateOne(
        {_id:req.params.id},
        {...req.body,_id:req.params.id}
    )
    .then(()=>res.status(200).json({message:"compétence générales modifiées"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.deleteSoftSkill = (req, res, next) => {
    SoftSkill.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({message:"compétence générales supprimées"}))
    .catch((error)=>res.status(400).json({error}));
};
