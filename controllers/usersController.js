const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = require('../models/User').model;
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
require('dotenv').config();

exports.signup = (req, res) => {
  let newUser;
  bcrypt.hash(req.body.password, 10)
  .then((hash) => {
    newUser = {
      username: req.body.username,
      password: hash
    }
    
    User.create(newUser)
      .then(user => {
        console.log(user);
        res.status(200).json({
          message: "User created"
        });
      })
      .catch(err => {
        res.status(500).send(
          err
        );
      });
  })
  .catch(err => {
    console.error(err);
  });
  
};

exports.login = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res
    .status(400)
    .json({message: "You need a username and password"});
    return;
  };

  User.findOne({username: req.body.username})
  .then(user => {
    bcrypt.compare(req.body.password, user.password)
    .then(response => {
      if (!response) {
        return res.status(401).json({message: "Passwords don't match"});
      }

      const payload = {id: user.id};
      const token = jwt.encode(payload, process.env.SECRET);

      return res.status(200).json({
        message: "User logged in successfully",
        token
      });
    })
    .catch(err => {
      console.error(err);
    });
  })
  .catch(err => {
    res
    .status(401)
    .json({
      message: "User not found", 
    });
  });
};
    
