const db = require('../Model/connection.js');

const addpostinapplication = function (
  data1,
  data2,
  data3,
  data4,
  data5,
  data6
) {
  console.log(
    data1 +
      '    ' +
      data2 +
      '    ' +
      data3 +
      '    ' +
      data4 +
      '    ' +
      data5 +
      '    ' +
      data6
  );
  let currentdate = Date().toLocaleString();
  let arrcurrentdate = currentdate.split(',');
  let mydate = arrcurrentdate[0];
  console.log(mydate);
  console.log('............................................');
  let arrmydate = mydate.split(' ');
  let currentMonth = new Date().getMonth();
  let ansdate = arrmydate[3] + '-' + (currentMonth + 1) + '-' + arrmydate[2];
  console.log(ansdate);
  let time = arrcurrentdate[1];
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO Application_Table SET ?',
      {
        ApplicationId: data1,
        JobId: data2,
        EmailIdOfJB: data3,
        EmailIdOfJP: data4,
        date: ansdate,
        time: time,
        applicationdate: data5,
        applicationtime: data6,
      },
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

module.exports.addpostinapplication = addpostinapplication;
