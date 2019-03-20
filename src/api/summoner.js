const express = require("express");
const router = express.Router();
const expressRouter = express();
const summonerController = require("../controllers/summoner.js");
const errorHandler  = require("../middleware/error-handller");

/* GET summoner info. */

router.get("/:name", summonerController.getSummoner);

router.get("/mastery/:name", summonerController.getSummonerMastery);

router.post("/championMastery", summonerController.getSummonerMasteryByChampion);

expressRouter.use(errorHandler);

module.exports = router;
