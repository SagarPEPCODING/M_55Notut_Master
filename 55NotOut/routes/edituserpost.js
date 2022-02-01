const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const postmodel = require('./postEditModelmm');

async function editUser(req, res) {
  let {
    email_id,
    password,
    confirm_password,
    user_name,
    phone_number,
    token,
    val2,
  } = req.params;
  try {
    let user = await postmodel.editadduserbyemailidpass(
      email_id,
      password,
      confirm_password,
      user_name,
      phone_number,
      token,
      val2
    );
    // console.log(user);
    res.status(201).json({
      status: 'success',
      user: user != undefined ? user : 'userid not valid...',
    });
  } catch (err) {
    // console.log(err);
    res.status(400).json({
      status: 'failure hai',
      user: err.message,
    });
  }
}

module.exports.editUser = editUser;
