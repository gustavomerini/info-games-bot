const axios = require("axios");
const constants = require("../utils/constants");
axios.defaults.headers.common["X-Riot-Token"] = constants.AUTH_TOKEN
const champions = require("../utils/champions.json");

exports.getSummonerId = async (req, res) => {
    try { 
        const response = await axios.get(`${constants.API_URL}/summoner/v4/summoners/by-name/${req.params.name}`);
        return res.status(201).send({
            response: response.data
        })
    } catch (error) {
        console.error('error', error);
    }
}

exports.getSummonerMastery = async (req, res) => {
    try {
        const summoner = await axios.get(`${constants.API_URL}/summoner/v4/summoners/by-name/${req.params.name}`);
        const mastery = await axios.get(`${constants.API_URL}/champion-mastery/v4/champion-masteries/by-summoner/${summoner.data.id}`)
        return res.status(201).send({
            response: mastery.data
        })
    } catch (error) {
        console.error('error', error);
    }
}

exports.getSummonerMasteryByChampion = async (req, res) => {
    try {
        const championId = champions.data[req.params.championName].key
        const summoner = await axios.get(`${constants.API_URL}/summoner/v4/summoners/by-name/${req.params.name}`);
        const championMastery = await axios.get(`${constants.API_URL}/champion-mastery/v4/champion-masteries/by-summoner/${summoner.data.id}/by-champion/${championId}`);
        console.log(summoner.data.id, championId);
        return res.status(201).send({
            response: championMastery.data
        })
    } catch (error) {
        console.error('error', error);
    }
}

