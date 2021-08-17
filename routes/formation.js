const express = require("express");

const router = express.Router();

const formationController = require("../controllers/formation")

router.get('/', formationController.getFormation);

router.post('/', formationController.postFormation);

router.put('/:id', formationController.putFormation);

router.delete('/:id', formationController.deleteFormation);

module.exports=router;