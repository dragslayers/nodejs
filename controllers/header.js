const Header = require("../models/Header");

exports.getHeader = (req, res, next) => {
    Header.find().then(headers => res.status(200).json(headers));
};

exports.putHeader = (req, res, next) => {
    Header.updateOne(
        {_id:req.params.id},
        {...req.body,_id:req.params.id}
    )
    .then(()=>res.status(200).json({message:"en-tête modifiée"}))
    .catch((error)=>res.status(400).json({error}));
};
