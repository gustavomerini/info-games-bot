const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Champion",
  new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    version: String,
    id: {
      type: String,
      required: true,
      unique: true
    },
    key: Number,
    title: String,
    blurb: String,
    info: {
      attack: Number,
      defense: Number,
      magic: Number,
      difficulty: Number
    },
    image: {
      full: String,
      sprite: String,
      group: String,
      x: Number,
      y: Number,
      w: Number,
      h: Number
    },
    tags: {
      type: Array,
      required: true
    },
    partype: String,
    stats: {
      hp: Number,
      hpperlevel: Number,
      mp: Number,
      mpperlevel: Number,
      movespeed: Number,
      armor: Number,
      armorperlevel: Number,
      spellblock: Number,
      spellblockperlevel: Number,
      attackrange: Number,
      hpregen: Number,
      hpregenperlevel: Number,
      mpregen: Number,
      mpregenperlevel: Number,
      crit: Number,
      critperlevel: Number,
      attackdamage: Number,
      attackdamageperlevel: Number,
      attackspeedoffset: Number,
      attackspeedperlevel: Number
    }
  })
);
