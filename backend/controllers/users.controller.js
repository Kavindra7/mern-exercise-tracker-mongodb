const User = require('../models/user.model');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
};

exports.addUser = async (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  try {
    await newUser.save();
    res.json('User added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
};
