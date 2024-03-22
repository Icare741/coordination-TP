// routes/diseaseRoutes.js

const express = require('express');
const router = express.Router();
const diseaseController = require('../controllers/diseaseController');

router.get('/diseases', diseaseController.getAll);
router.get('/diseases/:id', diseaseController.getById);
router.post('/diseases', diseaseController.create);
router.put('/diseases/:id', diseaseController.update);
router.delete('/diseases/:id', diseaseController.delete);

module.exports = router;
