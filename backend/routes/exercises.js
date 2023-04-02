const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exercises.controller');

router.get('/', exerciseController.listExercises);

router.post('/add', exerciseController.createExercise);

router.get('/:id', exerciseController.getExercise);

router.post('/update/:id', exerciseController.updateExercise);

router.delete('/:id', exerciseController.deleteExercise);

module.exports = router;
