const db = require('../Model/connection.js');

const addorganisation = function ({
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
  Payment,
  FeatureEvent,
  Image_Name,
  userEmailId,
}) {
  console.log(Type_of_Organisation);
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO Organisation_data SET ?',
      {
        Job_id: Job_id,
        Organisation_Name: Organisation_Name,
        Organisation_Motive: Organisation_Motive,
        about_Organisation: Information_about_Organisation,
        Organisation_Founder: Organisation_Founder,
        Organisation_Co_Founder: Organisation_Co_Founder,
        Organisation_mail_id: Organisation_mail_id,
        Contact_no: Contact_no,
        Number_of_members: Number_of_members_in_Oranisation,
        question: question,
        establishment_Year: Organisation_establishment_Year,
        Type_of_Organisation: Type_of_Organisation,
        Event_Feature: FeatureEvent,
        Payment: Payment,
        ImageName: Image_Name,
        userEmailId: userEmailId,
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

module.exports.addorganisation = addorganisation;
