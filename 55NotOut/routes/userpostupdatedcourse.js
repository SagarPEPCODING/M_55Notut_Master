const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postcourseUpdatedModel');

async function addUserUpdatedcourse(req, res) {
  let object = JSON.parse(req.params.obj);
  console.log(req.params.obj);
  console.log(object);
  const { name, description, price, imagename, jobid } = object;

  console.log(name + '   ' + 'sdkfjds');
  console.log(description + '   ' + 'sjdfds');
  console.log(price);
  console.log(imagename);
  console.log(jobid);

  try {
    let user = await postmodel.addproduct(
      name,
      description,
      price,
      imagename,
      jobid
    );

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

module.exports.addUserUpdatedcourse = addUserUpdatedcourse;
