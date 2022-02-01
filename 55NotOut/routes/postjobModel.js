const db = require('../Model/connection.js');

const addjob = function ({
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
  Payment,
  Job_Image,
}) {
  // console.log('Email Id Is: -' + Email_id);
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO job_data SET ?',
      {
        Job_id: Job_id,
        Job_profile: job_profile,
        Company_Location: Company_Location,
        Job_Industry: Job_Industry,
        Company_Experience: Company_Experience,
        Company_size: Company_size,
        Company_Type: Company_Type,
        Required_Experience: Required_Experience,
        Work_from: Work_from,
        Job_Type: Job_Type,
        Language_Required: Language_Required,
        Pay_Range: Pay_Range,
        Required_Skills_Competencies: Required_Skills_Competencies,
        Soft_Skills: Soft_Skills,
        About_Role: About_Role,
        About_Company: About_Company,
        Email_id: Email_id,
        Starting_Date: Starting_Date,
        Ending_Date: Ending_Date,
        Event_Feature: Event_Feature,
        Payment: Payment,
        ImageName: Job_Image,
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

module.exports.addjob = addjob;
