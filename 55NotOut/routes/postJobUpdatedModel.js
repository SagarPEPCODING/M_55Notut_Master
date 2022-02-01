const db = require('../Model/connection.js');

const addproduct = function (
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
) {
  console.log(Job_id);
  console.log(job_profile + '  ' + 'llll');
  console.log(Required_Experience);
  console.log(Required_Skills_Competencies + '   ' + 'lsdk');

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `update job_data SET Job_profile = '${job_profile}', Company_Location = '${Company_Location}',Job_Industry = '${Job_Industry}', Company_Experience = '${Company_Experience}', Company_size = '${Company_size}',  Company_Type='${Company_Type}', Required_Experience='${Required_Experience}', Work_from='${Work_from}',Job_Type='${Job_Type}',Language_Required='${Language_Required}',Pay_Range='${Pay_Range}',Required_Skills_Competencies='${Required_Skills_Competencies}',Soft_Skills='${Soft_Skills}',About_Role='${About_Role}',About_Company='${About_Company}' ,Email_id='${Email_id}',Starting_Date='${Starting_Date}',Ending_Date='${Ending_Date}',ImageName='${Job_Image}' where Job_id = '${Job_id}' `,

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

module.exports.addproduct = addproduct;
