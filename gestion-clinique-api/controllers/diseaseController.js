// controllers/diseaseController.js

const Disease = require('../models/diseaseModel');

exports.getAll = (req, res) => {
  Disease.getAll((diseases) => {
    res.json(diseases);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Disease.getById(id, (disease) => {
    res.json(disease);
  });
};

exports.create = (req, res) => {
  const newDisease = req.body;
  Disease.create(newDisease, (result) => {
    res.json({ message: 'Disease created successfully', id: result.insertId });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const updatedDisease = req.body;
  Disease.update(id, updatedDisease, (result) => {
    res.json({ message: 'Disease updated successfully', affectedRows: result.affectedRows });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Disease.delete(id, (result) => {
    res.json({ message: 'Disease deleted successfully', affectedRows: result.affectedRows });
  });
};
