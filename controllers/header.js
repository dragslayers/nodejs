const Header = require("../models/Header");

exports.getHeader = (req, res, next) => {
  Header.find({userId:req.params.userId}).then((headers) => res.status(200).json(headers));
};

exports.putHeader = (req, res, next) => {
  Header.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "en-tête modifiée" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.postHeader = (req, res, next) => {
  const header = new Header({
    name:'caca',
    job:'caca',
    phone:'caca',
    mail:'caca',
    portfolio:'caca',
    userId:req.params.userId,
  })
  header
    .save()
    .then(() => res.status(201).json({ message: "en-tête enregistrée" }))
    .catch((error) => res.status(400).json(error));
};
