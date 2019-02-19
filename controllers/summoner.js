const axios = require("axios");
const constants = require("../utils/constants");
axios.defaults.headers.common["X-Riot-Token"] = constants.AUTH_TOKEN


exports.getSummonerId = async (name) => {
    try { 
        const response = await axios.get(`${constants.API_URL}/summoner/v4/summoners/by-name/${name}`);
        return response.data.id;
    } catch (error) {
        console.error(error);
    }
}

exports.getSummonerMastery = async (encryptedId) => {
    try {
        const response = await axios.get(`${constants.API_URL}/champion-mastery/v4/champion-masteries/by-summoner/${encryptedId}`)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}