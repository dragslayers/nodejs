const Formation = require("../models/Formation");

exports.getFormation = (req, res, next) => {
    Formation.find().then(formations => res.status(200).json(formations));
};

exports.postFormation = (req, res, next) => {
    const formation = new Formation({...req.body})
    formation.save().then(()=>res.status(201).json({message:"formation enregistrée"}))
    .catch(error=>res.status(400).json(error));
};

exports.putFormation = (req, res, next) => {
    Formation.updateOne(
        {_id:req.params.id},
        {...req.body,_id:req.params.id}
    )
    .then(()=>res.status(200).json({message:"formation modifiée"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.deleteFormation = (req, res, next) => {
    Formation.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({message:"formation supprimée"}))
    .catch((error)=>res.status(400).json({error}));
};