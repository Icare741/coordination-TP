// server.js
const express = require('express');
const app = express();
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');

// Middleware pour parser les données JSON
app.use(express.json());

// Routes pour les médecins
app.use('/api/doctors', doctorRoutes);

// Routes pour les patients
app.use('/api/patients', patientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
