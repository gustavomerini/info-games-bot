const express = require("express");
const router = express.Router();
const summonerController = require("../controllers/summoner.js");

/* GET summoner info. */

router.get("/:name", summonerController.getSummoner);

router.get("/mastery/:name", summonerController.getSummonerMastery);

router.post("/championMastery", summonerController.getSummonerMasteryByChampion);


module.exports = router;
