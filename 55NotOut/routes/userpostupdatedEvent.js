const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postEventUpdatedModel');

async function addUserUpdateEvent(req, res) {
  let object = JSON.parse(req.params.obj);
  console.log(req.params.obj);
  console.log(object);
  const {
    Job_id,
    Event_profile,
    Event_description,
    Category,
    Event_mode,
    Event_Starting_date,
    Event_Ending_date,
    Event_Type,
    EventStartingTime,
    Event_Feature,
    Payment,
    Image_Name,
    EventEndingTime,
    Email_id,
  } = object;
  //   let jobid = req.params.jobid;
  //   console.log(req.params.jobid + 'skjdfksdjfkjdskl');
  console.log(Job_id + 'sdkfjds');
  console.log(Image_Name + 'sjdfds');
  console.log(Event_description);

  try {
    let user = await postmodel.addproduct(
      Event_profile,
      Event_description,
      Category,
      Event_mode,
      Event_Starting_date,
      Event_Ending_date,
      Event_Type,
      EventStartingTime,
      Event_Feature,
      Payment,
      Image_Name,
      EventEndingTime,
      Email_id,
      Job_id
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

module.exports.addUserUpdateEvent = addUserUpdateEvent;
