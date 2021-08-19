const express = require("express");

const router = express.Router();

const devexpController = require("../controllers/devexp")

router.get('/:userId', devexpController.getDevExp );

router.post('/', devexpController.postDevExp );

router.put('/:id', devexpController.putDevExp);

router.delete('/:id', devexpController.deleteDevExp);

module.exports=router;