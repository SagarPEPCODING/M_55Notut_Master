const db = require('../Model/connection.js');

const deletingimage = function (val) {
  console.log(typeof val);
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `delete from sliderimage_data where ID = '${val}'`,
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

module.exports.deletingimage = deletingimage;
