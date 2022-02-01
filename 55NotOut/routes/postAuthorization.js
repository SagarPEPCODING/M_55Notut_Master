const db = require('../Model/connection.js');

const addauthorization = function ({ key, email_id }) {
  // console.log('Email Id Is: -' + Email_id);
  console.log(email_id + ' ' + 'hii');
  return new Promise(function (resolve, reject) {
    let ans = db.query(

      `UPDATE login_data SET Authorization = '${key}' WHERE Email_id = '${email_id}'`,

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

module.exports.addauthorization = addauthorization;
