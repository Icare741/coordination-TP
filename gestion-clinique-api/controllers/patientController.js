// controllers/patientController.js

const Patient = require('../models/patientModel');

exports.getAll = (req, res) => {
  Patient.getAll((patients) => {
    res.json(patients);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Patient.getById(id, (patient) => {
    res.json(patient);
  });
};

exports.create = (req, res) => {
  const newPatient = req.body;
  Patient.create(newPatient, (result) => {
    res.json({ message: 'Patient created successfully', id: result.insertId });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const updatedPatient = req.body;
  Patient.update(id, updatedPatient, (result) => {
    res.json({ message: 'Patient updated successfully', affectedRows: result.affectedRows });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Patient.delete(id, (result) => {
    res.json({ message: 'Patient deleted successfully', affectedRows: result.affectedRows });
  });
};
