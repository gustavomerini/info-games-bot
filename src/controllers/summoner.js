const axios = require("axios");
const constants = require("../../config");
axios.defaults.headers.common["X-Riot-Token"] = constants.AUTH_TOKEN;
const champions = require("../utils/champions.json");

exports.getSummonerId = async (req, res, next) => {
  try {
    const response = await axios.get(`${constants.API_URL}/summoner/v4/summoners/by-name/${req.params.name}`);
    return res.status(201).send({
      response: response.data
    });
  } catch (error) {
    next(error.response);
  }
};

exports.getSummonerMastery = async (req, res, next) => {
  try {
    const summoner = await axios.get(`${constants.API_URL}/summoner/v4/summoners/by-name/${req.params.name}`);
    const mastery = await axios.get(`${constants.API_URL}/champion-mastery/v4/champion-masteries/by-summoner/${summoner.data.id}`);
    return res.status(201).send({
      response: mastery.data
    });
  } catch (error) {
    next(error.response);
  }
};

exports.getSummonerMasteryByChampion = async (req, res, next) => {
  try {
    const data = req.body.text.split(" ");
    const championId = champions.data[data[0]].key;
    const summoner = await axios.get(`${constants.API_URL}/summoner/v4/summoners/by-name/${data[1]}`);
    const championMastery = await axios.get(
      `${constants.API_URL}/champion-mastery/v4/champion-masteries/by-summoner/${summoner.data.id}/by-champion/${championId}`
    );
    const message = `O invocador ${data[1]} tem maestria ${championMastery.data.championLevel} e ${
      championMastery.data.championPoints
    } pontos de maestria com o campeão ${data[0]}`;
    axios.post("https://hooks.slack.com/services/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", { text: message });
    return res.status(201).send(message);
  } catch (error) {
    next(error.response);
  }
};
