const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postEventModel');

async function addUserEvent(req, res) {
  var obj = JSON.parse(req.params.data);
  try {
    let user = await postmodel.addEvent(obj);
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

module.exports.addUserEvent = addUserEvent;
