const db = require('../Model/connection.js');

const addposteddatadetails = function (data1, data2, data3) {
  console.log(data1 + '    ' + data2 + '    ' + data3);

  console.log(data1 + 'jdfkjdkfjkdjfkjdk');
  console.log(data2);
  console.log(data3);
  let obj = JSON.parse(data3);
  console.log(obj);

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `update application_table set interviewdate = '${obj.date}' , interviewtime = '${obj.time}', CompanyEmail = '${obj.email}', Address = '${obj.address}', shortlistedornot = 'true' where EmailIdOfJB  = '${data1}' AND JobId = '${data2}'`,
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

module.exports.addposteddatadetails = addposteddatadetails;
