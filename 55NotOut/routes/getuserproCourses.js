const db = require('../Model/connection.js');

const getuserCourses = function (emailid) {
  console.log(emailid);

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `select * from courses_data where Email_id = '${emailid}'`,
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

module.exports.getuserCourses = getuserCourses;
