const db = require('../Model/connection.js');

const getviewJobData = function ({ id }) {
  // console.log('Email Id Is: -' + Email_id);
  return new Promise(function (resolve, reject) {
    console.log(id);

    let ans = db.query(
      `select * from job_data where Job_id = '${id}'`,
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

module.exports.getviewJobData = getviewJobData;
