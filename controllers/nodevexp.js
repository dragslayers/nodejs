const NoDevExp = require("../models/NoDevExp");

exports.getNoDevExp = (req, res, next) => {
    NoDevExp.find().then(nodevexps => res.status(200).json(nodevexps));
};

exports.postNoDevExp = (req, res, next) => {
    const nodevexp = new NoDevExp({...req.body})
    nodevexp.save().then(()=>res.status(201).json({message:"experience non dev enregistrée"}))
    .catch(error=>res.status(400).json(error));
};

exports.putNoDevExp = (req, res, next) => {
    NoDevExp.updateOne(
        {_id:req.params.id},
        {...req.body,_id:req.params.id}
    )
    .then(()=>res.status(200).json({message:"experience non dev modifiée"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.deleteNoDevExp = (req, res, next) => {
    NoDevExp.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({message:"experience non dev supprimée"}))
    .catch((error)=>res.status(400).json({error}));
};