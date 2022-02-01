const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postproductModeledit');

async function addUserProductedit(req, res) {
  const {
    jobid,
    name,
    description,
    feature,
    inputvalue,
    Image_Name,
    productorigin,
  } = req.params;
  // console.log("name is :- " + name);
  // console.log("description is :- " + description);
  try {
    let user = await postmodel.addproductedit(
      jobid,
      name,
      description,
      feature,
      inputvalue,
      Image_Name,
      productorigin
    );
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

module.exports.addUserProductedit = addUserProductedit;
