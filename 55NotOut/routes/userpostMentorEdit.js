const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postMentorModelEdit');

async function addUserMentorEdit(req, res) {
  var obj = JSON.parse(req.params.data);
  console.log(obj);
  try {
    let user = await postmodel.addMentoredit(obj);
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

module.exports.addUserMentorEdit = addUserMentorEdit;
