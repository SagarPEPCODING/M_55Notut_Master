const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const getmodel = require('./getApplicationModelapplications');

async function getUserApplication(req, res) {
  try {
    let user = await getmodel.getApplications(req.params.email);
    res.status(201).json({
      status: 'success',
      user: user != undefined ? user : 'userid not valid...',
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'failure hai',
      error: err.message,
    });
  }
}

module.exports.getUserApplication = getUserApplication;
