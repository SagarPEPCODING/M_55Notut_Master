const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postTalentModel');

async function addUserTalent(req, res) {
  const { talent, description } = req.params;
  console.log('talent is :- ' + talent);
  console.log('description is :- ' + description);
  try {
    let user = await postmodel.addTalent(talent, description);
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

module.exports.addUserTalent = addUserTalent;
