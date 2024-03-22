// controllers/roomController.js

const Room = require('../models/roomModel');

exports.getAll = (req, res) => {
  Room.getAll((rooms) => {
    res.json(rooms);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Room.getById(id, (room) => {
    res.json(room);
  });
};

exports.create = (req, res) => {
  const newRoom = req.body;
  Room.create(newRoom, (result) => {
    res.json({ message: 'Room created successfully', id: result.insertId });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const updatedRoom = req.body;
  Room.update(id, updatedRoom, (result) => {
    res.json({ message: 'Room updated successfully', affectedRows: result.affectedRows });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Room.delete(id, (result) => {
    res.json({ message: 'Room deleted successfully', affectedRows: result.affectedRows });
  });
};
