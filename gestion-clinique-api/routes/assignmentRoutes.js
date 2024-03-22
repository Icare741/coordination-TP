// routes/assignmentRoutes.js

const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

router.get('/assignments', assignmentController.getAll);
router.get('/assignments/:id', assignmentController.getById);
router.post('/assignments', assignmentController.create);
router.put('/assignments/:id', assignmentController.update);
router.delete('/assignments/:id', assignmentController.delete);

module.exports = router;
