const db = require('../Model/connection.js');

const addposttimeanddateinlogoutdata = function (data1, data2, data3) {
  console.log(data1 + '    ' + data2 + '    ' + data3);

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `update login_data set logout_date='${data1}' , logouttime ='${data2}' where Email_id = '${data3}'`,
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

module.exports.addposttimeanddateinlogoutdata = addposttimeanddateinlogoutdata;
