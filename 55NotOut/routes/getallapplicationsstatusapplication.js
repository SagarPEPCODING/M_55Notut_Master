const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const getmodel = require('./getApplicationModelforstatus');

async function getUserApplicationstatus(req, res) {
  try {
    let user = await getmodel.getApplicationforjobseeker(req.params.email,req.params.value);
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

module.exports.getUserApplicationstatus = getUserApplicationstatus;
