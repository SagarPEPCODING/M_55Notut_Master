const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postmentorUpdatedModel');

async function addUserUpdatementor(req, res) {
  let object = JSON.parse(req.params.obj);
  console.log(req.params.obj);
  console.log(object);
  const {
    Job_id,
    First_Name,
    Last_Name,
    Experience,
    Mentor_profile,
    topics,
    Contact_Number,
    Email_id,
    Languages_known,
    CareerSummary,
    No_of_Sessions,
    pricing,
    Gender,
    question,
    Image_Name,
  } = object;
  //   let jobid = req.params.jobid;
  //   console.log(req.params.jobid + 'skjdfksdjfkjdskl');
  console.log(Job_id + '   ' + 'sdkfjds');
  console.log(First_Name + '   ' + 'sjdfds');
  console.log(Last_Name);
  console.log(Mentor_profile);

  try {
    let user = await postmodel.addproduct(
      Job_id,
      First_Name,
      Last_Name,
      Experience,
      Mentor_profile,
      topics,
      Contact_Number,
      Email_id,
      Languages_known,
      CareerSummary,
      No_of_Sessions,
      pricing,
      Gender,
      question,
      Image_Name
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

module.exports.addUserUpdatementor = addUserUpdatementor;
