const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postAuthorization');

async function addUserAuthorization(req, res) {
  const { key, email_id } = req.params;
  //   console.log(req.params.key);
  // console.log(req.params.email_id);
  console.log('email id is :- ' + email_id);
  let obj = {};
  obj.key = key;
  obj.email_id = email_id;
  console.log(obj);
  // console.log(key + email_id + 'inside user authorizatgion');
  try {
    let user = await postmodel.addauthorization(obj);
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

module.exports.addUserAuthorization = addUserAuthorization;
