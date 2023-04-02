const Exercise = require('../models/exercise.model');

exports.listExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
};

exports.createExercise = async (req, res) => {
  const { username, description, duration, date } = req.body;

  const newExercise = new Exercise({
    username,
    description,
    duration: Number(duration),
    date: Date.parse(date),
  });

  try {
    await newExercise.save();
    res.json('Exercise added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
};

exports.getExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
};

exports.updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    await exercise.save();
    res.json('Exercise updated!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
};

exports.deleteExercise = async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
    res.json('Exercise deleted.');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
};
