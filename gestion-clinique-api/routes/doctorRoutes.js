// routes/doctorRoutes.js

const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/doctors', doctorController.getAll);
router.get('/doctors/:id', doctorController.getById);
router.post('/doctors', doctorController.create);
router.put('/doctors/:id', doctorController.update);
router.delete('/doctors/:id', doctorController.delete);

module.exports = router;
