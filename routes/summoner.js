var express = require("express");
var router = express.Router();
const summonerController = require("../controllers/summoner.js");
/* GET summoner info. */

router.get("/:name", summonerController.getSummonerId);

router.get("/mastery/:name", summonerController.getSummonerMastery)

router.get("/mastery/:name/:championName", summonerController.getSummonerMasteryByChampion)
module.exports = router;

router.post("/teste", (req, res) => {
  return res.status(201).send({
    response: "oii"
})
})
