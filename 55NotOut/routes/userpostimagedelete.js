const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postdeleteModel');

async function deleteimage(req, res) {
  //   var obj = JSON.parse(req.params.id);
  console.log(req.params.id);
  try {
    let user = await postmodel.deletingimage(req.params.id);
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

module.exports.deleteimage = deleteimage;
