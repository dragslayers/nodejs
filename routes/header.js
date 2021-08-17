const express = require("express");

const router = express.Router();

const headerController = require("../controllers/header")

router.get('/', headerController.getHeader );

router.put('/:id', headerController.putHeader);

module.exports=router;