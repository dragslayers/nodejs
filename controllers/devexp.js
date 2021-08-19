const DevExp = require("../models/DevExp");

exports.getDevExp = (req, res, next) => {
    DevExp.find({userId:req.params.userId}).then(devexps => res.status(200).json(devexps));
};

exports.postDevExp = (req, res, next) => {
    const devexp = new DevExp({...req.body})
    devexp.save().then(()=>res.status(201).json({message:"expérience dev enregistrée"}))
    .catch(error=>res.status(400).json(error));
};

exports.putDevExp = (req, res, next) => {
    DevExp.updateOne(
        {_id:req.params.id},
        {...req.body,_id:req.params.id}
    )
    .then(()=>res.status(200).json({message:"expérience dev modifiée"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.deleteDevExp = (req, res, next) => {
    DevExp.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({message:"expérience dev supprimée"}))
    .catch((error)=>res.status(400).json({error}));
};