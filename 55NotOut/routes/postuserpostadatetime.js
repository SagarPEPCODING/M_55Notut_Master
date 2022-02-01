const db = require('../Model/connection.js');

const addposttimeanddateinlogindata = function (data1, data2, data3) {
  console.log(data1 + '    ' + data2 + '    ' + data3);

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `update login_data set logindate='${data1}' , logintime ='${data2}' where Email_id = '${data3}'`,
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

module.exports.addposttimeanddateinlogindata = addposttimeanddateinlogindata;
