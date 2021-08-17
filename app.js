require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Header = require("./models/Header");
const Formation = require("./models/Formation");
const DevExp = require("./models/DevExp");
const NoDevExp = require("./models/NoDevExp");
const Hardskill = require("./models/HardSkill");
const SoftSkill = require("./models/SoftSkill");
const HardSkill = require("./models/HardSkill");

const app = express();

mongoose
    .connect(
        `mongodb+srv://${process.env.NODE_LOGIN_MONGOOSE}:${process.env.NODE_PASSWORD_MONGOOSE}@cluster0.ohjbe.mongodb.net/${process.env.NODE_DBNAME_MONGOOSE}?retryWrites=true&w=majority`,
        {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log("Connexion reussi BG"))
    .catch(() => console.log("connexion raté looser"));

app.use(cors());
app.use(express.json());

//header
app.get('/api/header', (req, res, next) => {
    Header.find().then(headers => res.status(200).json(headers));
    
});

//formation

app.get('/api/formation', (req, res, next) => {
    Formation.find().then(formations => res.status(200).json(formations));
});

app.post('/api/formation', (req, res, next) => {
    const formation = new Formation({...req.body})
    formation.save().then(()=>res.status(201).json({message:"formation enregistré"}))
    .catch(error=>res.status(400).json(error));
});

//Experience Dev

app.get('/api/experience/devexp', (req, res, next) => {
    DevExp.find().then(devexps => res.status(200).json(devexps));
});

app.post('/api/experience/devexp', (req, res, next) => {
    const devexp = new DevExp({...req.body})
    devexp.save().then(()=>res.status(201).json({message:"experience dev enregistré"}))
    .catch(error=>res.status(400).json(error));
});

//Experience No Dev

app.get('/api/experience/nodevexp', (req, res, next) => {
    NoDevExp.find().then(nodevexps => res.status(200).json(nodevexps));
});

app.post('/api/experience/nodevexp', (req, res, next) => {
    const nodevexp = new NoDevExp({...req.body})
    nodevexp.save().then(()=>res.status(201).json({message:"experience non dev enregistré"}))
    .catch(error=>res.status(400).json(error));
});

//compétence technique

app.get('/api/competences/hard', (req, res, next) => {
    HardSkill.find().then(hardskills => res.status(200).json(hardskills));
});

app.post('/api/competences/hard', (req, res, next) => {
    const hardskill = new Hardskill({...req.body})
    hardskill.save().then(()=>res.status(201).json({message:"compétence technique enregistré"}))
    .catch(error=>res.status(400).json(error));
});

//compétence non technique

app.get('/api/competences/soft', (req, res, next) => {
    SoftSkill.find().then(softskills => res.status(200).json(softskills));
});

app.post('/api/competences/soft', (req, res, next) => {
    const softskill = new SoftSkill({...req.body})
    softskill.save().then(()=>res.status(201).json({message:"compétence générales enregistré"}))
    .catch(error=>res.status(400).json(error));
});

module.exports = app;