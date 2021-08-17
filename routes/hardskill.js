const express = require("express");

const router = express.Router();

const hardskillController = require("../controllers/hardskill")

router.get('/', hardskillController.getHardSkill);

router.post('/', hardskillController.postHardSkill);

router.put('/:id', hardskillController.putHardSkill);

router.delete('/:id', hardskillController.deleteHardSkill);


module.exports=router;