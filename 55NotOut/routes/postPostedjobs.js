const db = require('../Model/connection.js');

const addpost = function (data1, data2) {
  console.log(data1 + '    ' + data2);

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO postedjobs_data SET ?',
      {
        Email_id: data1,
        NoOfJobsPosted: data2,
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

module.exports.addpost = addpost;
