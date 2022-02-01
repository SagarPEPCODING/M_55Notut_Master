const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postproductModel');

async function addUserProduct(req, res) {
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
  console.log(name);
  console.log(jobid);
  console.log(description);
  console.log(feature);
  console.log(inputvalue);
  console.log(Image_Name);
  console.log(productorigin);

  try {
    let user = await postmodel.addproduct(
      jobid,
      name,
      description,
      feature,
      inputvalue,
      Image_Name
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

module.exports.addUserProduct = addUserProduct;
