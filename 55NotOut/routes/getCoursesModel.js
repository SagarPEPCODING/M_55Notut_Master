const db = require('../Model/connection.js');

const getCourses = function () {
  return new Promise(function (resolve, reject) {
    let data = db.query('Select * from courses_data', function (err, res) {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(res);
      }
    });
  });
};

module.exports.getCourses = getCourses;
