const db = require('../Model/connection.js');

const addposteddata = function (data1, data2, data3, data4, data5, data6) {
  console.log(
    data1 +
      '    ' +
      data2 +
      '    ' +
      data3 +
      '    ' +
      data4 +
      '    ' +
      data5 +
      '   ' +
      data6
  );

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO postedjobs SET ?',
      {
        Email_id: data1,
        Job_id: data2,
        Job_profile: data3,
        CompanyLocation: data4,
        date: data5,
        time: data6,
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

module.exports.addposteddata = addposteddata;
