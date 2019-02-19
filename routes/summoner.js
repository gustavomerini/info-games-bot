var express = require("express");
var router = express.Router();
const summonerController = require("../controllers/summoner.js");
/* GET summoner info. */

router.get("/:name", async function(req, res, next) {
  const sumonnerId = await summonerController.getSummonerId(req.params.name);
  res.send({id: sumonnerId });
});

router.get("/mastery/:name", async function(req, res, next) {
  const sumonnerId = await summonerController.getSummonerId(req.params.name);
  const mastery = await summonerController.getSummonerMastery(sumonnerId)
  res.send({ mastery });
});

module.exports = router;
