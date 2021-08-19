const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Header = require("../models/Header");
const User = require("../models/User");
require("dotenv").config();


exports.signup = async (req, res, next) => {
  const newUser = new User({
    ...req.body,
    password: bcrypt.hashSync(req.body.password),
  });
  return await User.findOne({ mail: newUser.mail }, (err, result) => {
    if (result) {
      res.status(404).json({ message: "mail deja use tocard" });
    } else {
      newUser
        .save()
        .then((result) => {
          const newHeader = new Header({
            name: "caca",
            job: "caca",
            phone: "caca",
            mail: "caca",
            portfolio: "caca",
            userId: result._id,
          });
          newHeader.save().then(() => console.log("new header crée"))
          res.status(201).json("votre compte a été crée coquin");
        })
        .catch((error) => res.status(400).json(error));
    }
  });
};
exports.login = async (req, res, next) => {
  const logUser = req.body;
  return await User.findOne({ mail: logUser.mail }, (err, result) => {
    if (!result) {
      res.status(404).json({ message: "compte inexistant" });
    } else {
      const goodPassword = bcrypt.compareSync(
        logUser.password,
        result.password
      );
      if (!goodPassword) {
        res.status(401).json({ message: "mdp faux loser", token: null });
      } else {
        res.status(200).json({
          _id: result._id,
          token: jwt.sign({ _id: result._id }, process.env.NODE_SECRET, {
            expiresIn: 15210,
          }),
        });
      }
    }
  });
};
