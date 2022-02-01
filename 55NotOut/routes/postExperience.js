const db = require('../Model/connection.js');

const addexp = function (data1) {
  console.log(data1);

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `select * from JobSeekerExperience_data where Email = '${data1}'`,
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

module.exports.addexp = addexp;
