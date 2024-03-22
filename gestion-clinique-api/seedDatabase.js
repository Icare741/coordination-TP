// seedDatabase.js

const moment = require('moment');
const db = require('./config/database');
const Doctor = require('./models/doctorModel');
const Patient = require('./models/patientModel');
const Disease = require('./models/diseaseModel');
const Room = require('./models/roomModel');
const Assignment = require('./models/assignmentModel');

// Fonction pour générer une date aléatoire dans un intervalle de jours
function randomDate(start, end) {
    return moment(start).add(Math.random() * (moment(end) - moment(start)), 'milliseconds').format('YYYY-MM-DD');
}

// Générer des données de médecin
function generateDoctors(num) {
    const doctors = [];
    for (let i = 0; i < num; i++) {
        const doctor = new Doctor(
            null,
            `Dr. John Doe ${i + 1}`,
            'Cardiologue', // Remplacer par une vraie spécialité
            '123-456-7890', // Remplacer par un vrai numéro de téléphone
            'Autres informations pertinentes'
        );
        doctors.push(doctor);
    }
    return doctors;
}

// Générer des données de patient
function generatePatients(num) {
    const patients = [];
    for (let i = 0; i < num; i++) {
        const patient = new Patient(
            null,
            `Patient ${i + 1}`,
            Math.floor(Math.random() * 100) + 18, // Âge aléatoire entre 18 et 117
            Math.random() < 0.5 ? 'Homme' : 'Femme',
            'Diagnostic du patient', // Remplacer par un vrai diagnostic
            '123-456-7890', // Remplacer par un vrai numéro de téléphone
            'Autres informations pertinentes'
        );
        patients.push(patient);
    }
    return patients;
}

// Générer des données de maladie
function generateDiseases(num) {
    const diseases = [];
    for (let i = 0; i < num; i++) {
        const disease = new Disease(
            null,
            `Maladie ${i + 1}`,
            'Catégorie de la maladie', // Remplacer par une vraie catégorie
            'Gravité de la maladie', // Remplacer par une vraie gravité
            'Autres informations pertinentes'
        );
        diseases.push(disease);
    }
    return diseases;
}

// Générer des données de chambre
function generateRooms(num) {
    const rooms = [];
    for (let i = 0; i < num; i++) {
        const room = new Room(
            null,
            Math.floor(Math.random() * 900) + 100, // Numéro de chambre aléatoire entre 100 et 999
            ['Simple', 'Double', 'VIP'][Math.floor(Math.random() * 3)], // Type de chambre aléatoire
            Math.random() < 0.5 ? 'Disponible' : 'Occupée',
            'Autres informations pertinentes'
        );
        rooms.push(room);
    }
    return rooms;
}

// Générer des données d'assignation
function generateAssignments(num, doctors, patients, rooms) {
    const assignments = [];
    for (let i = 0; i < num; i++) {
        const assignment = new Assignment(
            null,
            doctors[Math.floor(Math.random() * doctors.length)].id,
            patients[Math.floor(Math.random() * patients.length)].id,
            rooms[Math.floor(Math.random() * rooms.length)].id,
            randomDate('2020-01-01', '2024-12-31'),
            randomDate('2020-01-01', '2024-12-31'),
            'Autres informations pertinentes'
        );
        assignments.push(assignment);
    }
    return assignments;
}

// Remplir la base de données avec des données aléatoires
async function seedDatabase() {
    // Générer des données
    const numDoctors = 10;
    const numPatients = 20;
    const numDiseases = 5;
    const numRooms = 10;
    const numAssignments = 30;

    const doctors = generateDoctors(numDoctors);
    const patients = generatePatients(numPatients);
    const diseases = generateDiseases(numDiseases);
    const rooms = generateRooms(numRooms);
    const assignments = generateAssignments(numAssignments, doctors, patients, rooms);

    // Insérer des données dans la base de données
    try {
        // Insérer les médecins
        for (const doctor of doctors) {
            await Doctor.create(doctor, (result) => {
                console.log(`Doctor created with ID: ${result.insertId}`);
            });
        }

        // Insérer les patients
        for (const patient of patients) {
            await Patient.create(patient, (result) => {
                console.log(`Patient created with ID: ${result.insertId}`);
            });
        }

        // Insérer les maladies
        for (const disease of diseases) {
            await Disease.create(disease, (result) => {
                console.log(`Disease created with ID: ${result.insertId}`);

            });
        }

        // Insérer les chambres
        for (const room of rooms) {
            await Room.create(room, (result) => {
                console.log(`Room created with ID: ${result.insertId}`);
            });
        }

        // Insérer les assignations
        for (const assignment of assignments) {
            await Assignment.create(assignment, (result) => {
                console.log(`Assignment created with ID: ${result.insertId}`);
            });
        }

        console.log('Database seeding completed successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Fermer la connexion à la base de données
        db.end();
        console.log('Database connection closed.');
    }
}

// Appeler la fonction pour remplir la base de données
seedDatabase();


