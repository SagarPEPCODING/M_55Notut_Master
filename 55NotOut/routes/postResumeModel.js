const db = require('../Model/connection.js');

const addResume = function ({ data, mail }) {
  // console.log('Email Id Is: -' + Email_id);
  console.log(data);
  console.log(
    mail + 'sdkfjlsdkjfksldjflkjdsaklfjklsdljklkfdsajksdfjkjadsfkajfkdsjkf'
  );
  console.log('muname');
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      // 'INSERT INTO ProfileImage SET ?',
      `UPDATE profileimage SET resume = '${data}' where mail = '${mail}'`,
      // {
      //   ImageName: data,
      //   mail: mail,
      // }
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

module.exports.addResume = addResume;
