const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postJobUpdatedModel');

async function addUserUpdatejob(req, res) {
  let object = JSON.parse(req.params.obj);
  console.log(req.params.obj);
  console.log(object);
  const {
    Job_id,
    job_profile,
    Company_Location,
    Job_Industry,
    Company_Experience,
    Company_size,
    Company_Type,
    Required_Experience,
    Work_from,
    Job_Type,
    Language_Required,
    Pay_Range,
    Required_Skills_Competencies,
    Soft_Skills,
    About_Role,
    About_Company,
    Email_id,
    Starting_Date,
    Ending_Date,
    Event_Feature,
    Job_Image,
  } = object;
  //   let jobid = req.params.jobid;
  //   console.log(req.params.jobid + 'skjdfksdjfkjdskl');
  console.log(Job_id + '   ' + 'sdkfjds');
  console.log(job_profile + '   ' + 'sjdfds');
  console.log(About_Role);
  console.log(About_Company);

  try {
    let user = await postmodel.addproduct(
      Job_id,
      job_profile,
      Company_Location,
      Job_Industry,
      Company_Experience,
      Company_size,
      Company_Type,
      Required_Experience,
      Work_from,
      Job_Type,
      Language_Required,
      Pay_Range,
      Required_Skills_Competencies,
      Soft_Skills,
      About_Role,
      About_Company,
      Email_id,
      Starting_Date,
      Ending_Date,
      Event_Feature,
      Job_Image
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

module.exports.addUserUpdatejob = addUserUpdatejob;
