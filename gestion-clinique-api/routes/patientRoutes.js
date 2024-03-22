// routes/patientRoutes.js

const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/patients', patientController.getAll);
router.get('/patients/:id', patientController.getById);
router.post('/patients', patientController.create);
router.put('/patients/:id', patientController.update);
router.delete('/patients/:id', patientController.delete);

module.exports = router;
