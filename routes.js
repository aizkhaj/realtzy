const express = require('express');
const router = express.Router();
const usersController = require('./controllers/usersController');
const clientsController = require('./controllers/clientsController');
const listingsController = require('./controllers/listingsController');
const auth = require('./auth')();

// GET /
// show homepage
router.route('/')
  .get((req, res) => {
    res.json("Welcome to the API for Realtzy app.");
  });

// POST /user/signup
// allow a user to sign up to the platform.
router.route('/signup')
  .post(usersController.signup);

// POST /user/login
router.route('/login')
  .post(usersController.login);

// GET /listings
// show all real estate listings in a table
router.route('/listings')
  .get(auth.authenticate(), listingsController.allListings);

// GET /crm
// show all client info in a table
router.route('/crm')
  .get(auth.authenticate(), clientsController.allClients);

// POST /crm/new
// add one new client to the table
router.route('/crm/new')
  .post(auth.authenticate(), clientsController.createClient);

// TO COMPLETE IF THERE'S TIME:
// PATCH /crm/:client_id/update
// update information on a client from table.

// DELETE /crm/:client_id/delete
// delete information on a client from table.

module.exports = router;