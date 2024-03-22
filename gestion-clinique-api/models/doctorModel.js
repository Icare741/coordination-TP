// models/doctorModel.js

const db = require('../config/database');

class Doctor {
  constructor(id, nom, spécialité, coordonnées, autres_champs_pertinents) {
    this.id = id;
    this.nom = nom;
    this.spécialité = spécialité;
    this.coordonnées = coordonnées;
    this.autres_champs_pertinents = autres_champs_pertinents;
  }

  static getAll(callback) {
    db.query('SELECT * FROM doctors', (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static getById(id, callback) {
    db.query('SELECT * FROM doctors WHERE id = ?', id, (error, results) => {
      if (error) throw error;
      callback(results[0]);
    });
  }

  static create(newDoctor, callback) {
    db.query('INSERT INTO doctors SET ?', newDoctor, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static update(id, updatedDoctor, callback) {
    db.query('UPDATE doctors SET ? WHERE id = ?', [updatedDoctor, id], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static delete(id, callback) {
    db.query('DELETE FROM doctors WHERE id = ?', id, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = Doctor;
