const express = require('express');
const router = express.Router();
const usersController = require('./controllers/usersController');
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

// GET /user/logout
// allow a user to sign in and out of the platform.

// GET /index
// show all real estate listings in a table

// GET /crm
// show all client info in a table

// POST /crm/new
// add one new client to the table

// PATCH /crm/:client_id/update
// update information on a client from table.

// DELETE /crm/:client_id/delete
// delete information on a client from table.

module.exports = router;