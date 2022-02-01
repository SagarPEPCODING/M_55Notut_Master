const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const usermodel = require('./userModel');

async function getUser(req, res) {
  let email = req.params.email_id;
  try {
    let user = await usermodel.getbyemailid(req.params.email_id);
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

module.exports.getUser = getUser;
