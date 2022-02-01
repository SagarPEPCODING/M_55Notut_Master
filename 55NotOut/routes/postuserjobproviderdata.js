const db = require('../Model/connection.js');

const addjobproviderdata = function (data1, data2) {
  console.log(data1 + '    ' + data2);

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `update postedjobs_data set NoOfJobsPosted = ${data2} where Email_id = '${data1}'`,
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

module.exports.addjobproviderdata = addjobproviderdata;
