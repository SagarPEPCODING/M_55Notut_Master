const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const usermodel = require('./getuserProfileImageModel');

async function getUserProfileImage(req, res) {
  let email = req.params.email_id;
  console.log(email);
  try {
    let user = await usermodel.getuserprofileImagebyemailid(email);
    console.log(user);
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

module.exports.getUserProfileImage = getUserProfileImage;
