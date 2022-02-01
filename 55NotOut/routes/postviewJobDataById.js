const db = require('../Model/connection.js');

const addviewJobData = function (id, views) {
  console.log(id);
  console.log(views);
  console.log('here');
  let incViews = views + 1;
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `update job_data set views = ${incViews} where Job_id = '${id}'`,
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

module.exports.addviewJobData = addviewJobData;
