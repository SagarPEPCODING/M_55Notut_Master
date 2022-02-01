const db = require('../Model/connection.js');

const adduserexperiencedata = function (key1, key2, key3, key4) {
  // console.log('Email Id Is: -' + Email_id);
  return new Promise(function (resolve, reject) {
    console.log(key1);
    console.log(key2);
    console.log(key3);
    console.log(key4);

    // UPDATE login_data SET Email_id_Active = true where Email_id="${id}"

    let ans = db.query(
      `INSERT INTO JobSeekerExperience_data SET ?`,
      {
        ExperienceId: key1,
        Email: key2,
        CompanyName: key3,
        Experience: key4,
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

module.exports.adduserexperiencedata = adduserexperiencedata;
