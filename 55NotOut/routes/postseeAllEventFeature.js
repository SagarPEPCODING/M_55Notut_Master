const db = require('../Model/connection.js');

const seeEventfeatureHomepage = function ({ key, Job_id }) {
  // console.log('Email Id Is: -' + Email_id);
  console.log(Job_id + ' ' + 'hii');
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `UPDATE event_data SET Event_access = '${key}' WHERE Job_id = '${Job_id}'`,

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

module.exports.seeEventfeatureHomepage = seeEventfeatureHomepage;
