const db = require('../Model/connection.js');

const addview = function (appid, no) {
  // console.log('hello addproduct...');
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `update application_table set views = ${no} where ApplicationId ='${appid}'`,
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

module.exports.addview = addview;
