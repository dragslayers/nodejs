require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const formationRoutes = require("./routes/formation");
const devexpRoutes = require("./routes/devexp");
const nodevexpRoutes = require("./routes/nodevexp");
const hardskillRoutes = require("./routes/hardskill");
const softskillRoutes = require("./routes/softskill");
const headerRoutes = require("./routes/header");
const userRoutes= require("./routes/user");

const app = express();

mongoose
    .connect(
        `mongodb+srv://${process.env.NODE_LOGIN_MONGOOSE}:${process.env.NODE_PASSWORD_MONGOOSE}@cluster0.ohjbe.mongodb.net/${process.env.NODE_DBNAME_MONGOOSE}?retryWrites=true&w=majority`,
        {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log("Connexion reussi"))
    .catch(() => console.log("connexion raté"));

app.use(cors());
app.use(express.json());

app.use('/api/header', headerRoutes);
app.use('/api/users', userRoutes);
app.use("/api/formation",formationRoutes);
app.use("/api/experience/devexp",devexpRoutes);
app.use("/api/experience/nodevexp",nodevexpRoutes);
app.use("/api/competences/soft",softskillRoutes);
app.use("/api/competences/hard",hardskillRoutes);

module.exports = app;