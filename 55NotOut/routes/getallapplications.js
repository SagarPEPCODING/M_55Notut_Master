const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const getmodel = require('./getApplicationModel');

async function getUserApplications(req, res) {
  try {
    let user = await getmodel.getApplication(
      req.params.email,
      req.params.jobid
    );
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

module.exports.getUserApplications = getUserApplications;
