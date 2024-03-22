// models/diseaseModel.js

const db = require('../config/database');

class Disease {
  constructor(id, nom, catégorie, gravité, autres_champs_pertinents) {
    this.id = id;
    this.nom = nom;
    this.catégorie = catégorie;
    this.gravité = gravité;
    this.autres_champs_pertinents = autres_champs_pertinents;
  }

  static getAll(callback) {
    db.query('SELECT * FROM diseases', (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static getById(id, callback) {
    db.query('SELECT * FROM diseases WHERE id = ?', id, (error, results) => {
      if (error) throw error;
      callback(results[0]);
    });
  }

  static create(newDisease, callback) {
    db.query('INSERT INTO diseases SET ?', newDisease, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static update(id, updatedDisease, callback) {
    db.query('UPDATE diseases SET ? WHERE id = ?', [updatedDisease, id], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static delete(id, callback) {
    db.query('DELETE FROM diseases WHERE id = ?', id, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = Disease;
