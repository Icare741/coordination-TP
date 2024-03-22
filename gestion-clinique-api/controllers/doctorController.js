// controllers/doctorController.js

const Doctor = require('../models/doctorModel');

exports.getAll = (req, res) => {
  Doctor.getAll((doctors) => {
    res.json(doctors);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Doctor.getById(id, (doctor) => {
    res.json(doctor);
  });
};

exports.create = (req, res) => {
  const newDoctor = req.body;
  Doctor.create(newDoctor, (result) => {
    res.json({ message: 'Doctor created successfully', id: result.insertId });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const updatedDoctor = req.body;
  Doctor.update(id, updatedDoctor, (result) => {
    res.json({ message: 'Doctor updated successfully', affectedRows: result.affectedRows });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Doctor.delete(id, (result) => {
    res.json({ message: 'Doctor deleted successfully', affectedRows: result.affectedRows });
  });
};
