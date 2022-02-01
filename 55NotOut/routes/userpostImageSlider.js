const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postImageModelSlider');

async function addUserImageSlider(req, res) {
  console.log('hello my data :- ' + req.params.jobid);
  console.log(req.params.jobid);
  var jobid = req.params.jobid;
  var filename = req.params.filename;
  var link = req.params.link;
  var alt = req.params.alt;
  var forwhat = req.params.forwhat;

  let obj = {};
  obj.jobid = jobid;
  obj.filename = filename;
  obj.link = link;
  obj.alt = alt;
  obj.forwhat = forwhat;

  try {
    let user = await postmodel.addImageSlider(obj);
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

module.exports.addUserImageSlider = addUserImageSlider;
