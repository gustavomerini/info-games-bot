const express = require("express");
const router = express.Router();
const champions = require("../controllers/champion");

/* GET summoner info. */

router.get("/", champions.findAll);

router.get("/:name", champions.findOne);

router.post("/", champions.create);

router.put("/:name", champions.update);

router.delete("/:name", champions.delete);

module.exports = router;
