const express = require("express");

const router = express.Router();

const nodevexpController = require("../controllers/nodevexp")


router.get('/', nodevexpController.getNoDevExp);

router.post('/', nodevexpController.postNoDevExp);

router.put('/:id', nodevexpController.putNoDevExp);

router.delete('/:id', nodevexpController.deleteNoDevExp);

module.exports=router;