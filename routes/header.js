const express = require("express");

const router = express.Router();

const headerController = require("../controllers/header")

router.get('/:userId', headerController.getHeader );

router.put('/:id', headerController.putHeader);

//router.post('/:userId',headerController.postHeader);

module.exports=router;