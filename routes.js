const express = require('express');
const router = express.Router();

// GET /
// show homepage
router.route('/')
  .get((req, res) => {
    res.json("Welcome to the API for Realtzy app.");
  });

// GET /user/signup
// POST /user/signup
// allow a user to sign up to the platform.

// GET /user/login
// POST /user/login
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