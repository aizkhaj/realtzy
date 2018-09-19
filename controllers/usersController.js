const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = require('../models/User').model;

exports.signup = (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password
  }
  User.create(newUser)
    .then(user => {
      res.json({
        message: "User created",
        user
      });
    })
    .catch(err => {
      res.json({
        message: "Something went wrong!",
        err
      });
    });
};

exports.login = (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  }
  User.create(newUser)
    .then(user => {
      res.json({
        message: "User logged in",
        user
      });
    })
    .catch(err => {
      res.json({
        message: "Something went wrong!",
        err
      });
    });
}