const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postorganisationUpdatedModel');

async function addUserUpdatedorganisation(req, res) {
  let object = JSON.parse(req.params.obj);
  console.log(req.params.obj);
  console.log(object);
  const {
    Job_id,
    Organisation_Name,
    Organisation_Motive,
    Information_about_Organisation,
    Organisation_Founder,
    Organisation_Co_Founder,
    Organisation_mail_id,
    Contact_no,
    Number_of_members_in_Oranisation,
    question,
    Organisation_establishment_Year,
    Type_of_Organisation,
    Image_Name,
    userEmailId,
  } = object;

  console.log(Job_id + '   ' + 'sdkfjds');
  console.log(Organisation_Name + '   ' + 'sjdfds');
  console.log(Number_of_members_in_Oranisation);
  console.log(Image_Name);

  try {
    let user = await postmodel.addproduct(
      Job_id,
      Organisation_Name,
      Organisation_Motive,
      Information_about_Organisation,
      Organisation_Founder,
      Organisation_Co_Founder,
      Organisation_mail_id,
      Contact_no,
      Number_of_members_in_Oranisation,
      question,
      Organisation_establishment_Year,
      Type_of_Organisation,
      Image_Name,
      userEmailId
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

module.exports.addUserUpdatedorganisation = addUserUpdatedorganisation;
