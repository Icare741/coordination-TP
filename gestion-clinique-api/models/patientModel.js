// models/patientModel.js

const db = require('../config/database');

class Patient {
  constructor(id, nom, âge, genre, diagnostic, coordonnées, autres_champs_pertinents) {
    this.id = id;
    this.nom = nom;
    this.âge = âge;
    this.genre = genre;
    this.diagnostic = diagnostic;
    this.coordonnées = coordonnées;
    this.autres_champs_pertinents = autres_champs_pertinents;
  }

  static getAll(callback) {
    db.query('SELECT * FROM patients', (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static getById(id, callback) {
    db.query('SELECT * FROM patients WHERE id = ?', id, (error, results) => {
      if (error) throw error;
      callback(results[0]);
    });
  }

  static create(newPatient, callback) {
    db.query('INSERT INTO patients SET ?', newPatient, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static update(id, updatedPatient, callback) {
    db.query('UPDATE patients SET ? WHERE id = ?', [updatedPatient, id], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static delete(id, callback) {
    db.query('DELETE FROM patients WHERE id = ?', id, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = Patient;
