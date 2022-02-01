const db = require('../Model/connection.js');

const addMentor = function ({
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
  Payment,
  FeatureEvent,
  Image_Name,
}) {
  console.log(Image_Name + "line no 22");
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO Mentor_data SET ?',
      {
        Job_id: Job_id,
        First_Name: First_Name,
        Last_Name: Last_Name,
        Experience: Experience,
        Mentor_profile: Mentor_profile,
        topics: topics,
        Contact_Number: Contact_Number,
        Email_id: Email_id,
        Languages_known: Languages_known,
        CareerSummary: CareerSummary,
        No_of_Sessions: No_of_Sessions,
        pricing: pricing,
        Gender: Gender,
        question: question,
        Payment: Payment,
        Event_Feature: FeatureEvent,
        ImageName: Image_Name,
      },
      function (err, res) {
        if (err) {
          console.log('err');
          reject(err);
          return;
        } else {
          console.log('resolve');
          resolve(res);
        }
      }
    );
  });
};

module.exports.addMentor = addMentor;
