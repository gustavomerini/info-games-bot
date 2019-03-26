const Champion = require("../models/champion");
const errorParser = require("../utils/errorParser");

exports.create = (req, res, next) => {
  const champion = new Champion(req.body);
  champion
    .save()
    .then(result => {
      return res.status(201).json(result);
    })
    .catch(err => {
      next(errorParser.dataBase(err));
    });
};

exports.findAll = async (req, res, next) => {
  Champion
    .find()
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      next(errorParser.dataBase(err));
    });
};

exports.findOne = async (req, res, next) => {
  Champion
    .find({ name: req.params.name })
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      next(errorParser.dataBase(err));
    });
};

exports.update = async (req, res, next) => {
  Champion
    .updateOne({name: req.params.name}, req.body)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      next(errorParser.dataBase(err));
    });
};

exports.delete = async (req, res, next) => {
    Champion
    .deleteOne({name: req.params.name})
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      next(errorParser.dataBase(err));
    });
};
