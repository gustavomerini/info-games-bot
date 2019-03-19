var express = require("express");
var router = express.Router();
const summonerController = require("../controllers/summoner.js");
/* GET summoner info. */

router.get("/:name", summonerController.getSummonerId);

router.get("/mastery/:name", summonerController.getSummonerMastery)

router.post("/championMastery", summonerController.getSummonerMasteryByChampion)
module.exports = router;

router.post("/", (req, res) => {
  console.log('teste', req.body.text);
  return res.status(201).send(req.body.text)
})