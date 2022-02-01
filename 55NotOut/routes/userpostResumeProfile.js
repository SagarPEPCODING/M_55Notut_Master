const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postResumeModel');

async function addUserResume(req, res) {
  // console.log(req);
  console.log('hello my data :- ' + req.params.data);
  console.log(req.params.data);
  var data = req.params.data;
  var email = req.params.mail_id;
  console.log(email);
  //   var obj = JSON.parse(req.params.data);
  //   var obj = JSON.parse(req.params.data);
  //   console.log(obj);
  let obj = {};
  obj.data = data;
  obj.mail = email;

  try {
    let user = await postmodel.addResume(obj);
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

module.exports.addUserResume = addUserResume;
