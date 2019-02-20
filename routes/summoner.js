var express = require("express");
var router = express.Router();
const summonerController = require("../controllers/summoner.js");
/* GET summoner info. */

router.get("/:name", summonerController.getSummonerId);

router.get("/mastery/:name", summonerController.getSummonerMastery)

router.get("/mastery/:name/:championName", summonerController.getSummonerMasteryByChampion)
module.exports = router;

router.post("/teste", (req, res) => {
  console.log('teste', req.query ? `eh valido ${req.query.text}` : `e o gole ${req.query}`);
  return res.status(201).send(req.query.text)
})
