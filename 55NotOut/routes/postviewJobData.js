const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postviewJobDataById');

async function addView(req, res) {
  console.log(req);
  let id = req.params.id;
  let views = req.params.views;
  views = parseInt(views);
  try {
    let user = await postmodel.addviewJobData(id, views);
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

module.exports.addView = addView;
