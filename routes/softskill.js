const express = require("express");

const router = express.Router();

const softskillController = require("../controllers/softskill")

router.get('/:userId', softskillController.getSoftSkill);

router.post('/', softskillController.postSoftSkill);

router.put('/:id', softskillController.putSoftSkill);

router.delete('/:id', softskillController.deleteSoftSkill);

module.exports=router;