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
        const data = req.body.text.split(" ");
        console.log("data", data);
        const championId = champions.data[data[0]].key
        const summoner = await axios.get(`${constants.API_URL}/summoner/v4/summoners/by-name/${data[1]}`);
        const championMastery = await axios.get(`${constants.API_URL}/champion-mastery/v4/champion-masteries/by-summoner/${summoner.data.id}/by-champion/${championId}`);
        return res.status(201).send(`O invocador ${data[1]} tem ${championMastery.data.championLevel}, ${championMastery.data.championPoints} pontos de maestria com o campeão ${data[0]}`);
    } catch (error) {
        console.error('error', error);
    }
}
