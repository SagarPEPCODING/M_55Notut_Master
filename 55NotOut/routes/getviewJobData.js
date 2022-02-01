const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./getviewJobDataById');

async function getView(req, res) {
  console.log(req);
  let id = req.params.id;
  try {
    let user = await postmodel.getviewJobData(id);
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

module.exports.getView = getView;
