// controllers/assignmentController.js

const Assignment = require('../models/assignmentModel');

exports.getAll = (req, res) => {
  Assignment.getAll((assignments) => {
    res.json(assignments);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Assignment.getById(id, (assignment) => {
    res.json(assignment);
  });
};

exports.create = (req, res) => {
  const newAssignment = req.body;
  Assignment.create(newAssignment, (result) => {
    res.json({ message: 'Assignment created successfully', id: result.insertId });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const updatedAssignment = req.body;
  Assignment.update(id, updatedAssignment, (result) => {
    res.json({ message: 'Assignment updated successfully', affectedRows: result.affectedRows });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Assignment.delete(id, (result) => {
    res.json({ message: 'Assignment deleted successfully', affectedRows: result.affectedRows });
  });
};
