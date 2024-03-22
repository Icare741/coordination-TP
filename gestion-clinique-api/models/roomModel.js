// models/roomModel.js

const db = require('../config/database');

class Room {
  constructor(id, numéro_de_chambre, type_de_chambre, statut_de_disponibilité, autres_champs_pertinents) {
    this.id = id;
    this.numéro_de_chambre = numéro_de_chambre;
    this.type_de_chambre = type_de_chambre;
    this.statut_de_disponibilité = statut_de_disponibilité;
    this.autres_champs_pertinents = autres_champs_pertinents;
  }

  static getAll(callback) {
    db.query('SELECT * FROM rooms', (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static getById(id, callback) {
    db.query('SELECT * FROM rooms WHERE id = ?', id, (error, results) => {
      if (error) throw error;
      callback(results[0]);
    });
  }

  static create(newRoom, callback) {
    db.query('INSERT INTO rooms SET ?', newRoom, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static update(id, updatedRoom, callback) {
    db.query('UPDATE rooms SET ? WHERE id = ?', [updatedRoom, id], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static delete(id, callback) {
    db.query('DELETE FROM rooms WHERE id = ?', id, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = Room;
