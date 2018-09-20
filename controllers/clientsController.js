const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = require('../models/User').model;
const Client = require('../models/Client').model;

exports.allClients = (req, res) => {
  User.findById(req.user.id)
  .then(user => {
    if (user.clients === []) {
      return res.send("Seems like there are no clients here yet.");
    }

    res.status(200).json(user.clients);
  })
  .catch(err => {
    res.status(500).send(err);
  })
};

exports.createClient = (req, res) => {
  User.findById(req.user.id)
  .then(user => {
    const client = {
      userId: req.user.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      type: req.body.type
    };

    user.clients.push(client);
    user
    .save()
    .then(user => {
      res
      .status(201)
      .json({
        message: "Client created.",
        clientId: user.clients[user.clients.length - 1].id
      });
    })
    .catch();
  })
  .catch(err => res.status(500).send(err));
};