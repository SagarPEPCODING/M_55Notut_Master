const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const usermodel = require('./getuserProfileModel');

async function getUserProfile(req, res) {
  let email = req.params.email_id;
  console.log(email);
  try {
    let user = await usermodel.getuserprofilebyemailid(req.params.email_id);
    res.status(201).json({
      status: 'success',
      user: user != undefined ? user : 'userid not valid...',
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'failure hai',
      user: err.message,
    });
  }
}

module.exports.getUserProfile = getUserProfile;
