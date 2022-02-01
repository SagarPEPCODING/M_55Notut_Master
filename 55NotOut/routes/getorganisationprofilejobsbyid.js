const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./getuserproOrganisation');

async function userprofileorganisationGet(req, res) {
  let { emailid } = req.params;
  console.log(emailid);
  try {
    let user = await postmodel.getuserOrganisations(emailid);
    // console.log(user);
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

module.exports.userprofileorganisationGet = userprofileorganisationGet;
