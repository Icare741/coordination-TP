// models/assignmentModel.js

const db = require('../config/database');

class Assignment {
  constructor(id, doctor_id, patient_id, room_id, date_d_assignation, date_de_sortie, autres_champs_pertinents) {
    this.id = id;
    this.doctor_id = doctor_id;
    this.patient_id = patient_id;
    this.room_id = room_id;
    this.date_d_assignation = date_d_assignation;
    this.date_de_sortie = date_de_sortie;
    this.autres_champs_pertinents = autres_champs_pertinents;
  }

  static getAll(callback) {
    db.query('SELECT * FROM assignments', (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static getById(id, callback) {
    db.query('SELECT * FROM assignments WHERE id = ?', id, (error, results) => {
      if (error) throw error;
      callback(results[0]);
    });
  }

  static create(newAssignment, callback) {
    db.query('INSERT INTO assignments SET ?', newAssignment, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static update(id, updatedAssignment, callback) {
    db.query('UPDATE assignments SET ? WHERE id = ?', [updatedAssignment, id], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static delete(id, callback) {
    db.query('DELETE FROM assignments WHERE id = ?', id, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = Assignment;
