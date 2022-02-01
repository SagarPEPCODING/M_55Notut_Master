const db = require('../Model/connection.js');

const adduserprofiledata = function ({
  key1,
  key2,
  key3,
  key4,
  key5,
  key6,
  key7,
  key8,
  key9,
  key10,
  key11,
  key12,
  key13,
  key14,
  key15,
}) {
  // console.log('Email Id Is: -' + Email_id);
  return new Promise(function (resolve, reject) {
    console.log(key1);
    console.log(key2);
    console.log(key3);
    console.log(key4);
    console.log(key5);
    console.log(key6);
    console.log(key7);
    console.log(key8);

    // UPDATE login_data SET Email_id_Active = true where Email_id="${id}"

    let ans = db.query(
      `INSERT INTO userprofile_data SET ?`,
      {
        Email_id: key15,
        IterestedIn: key1,
        Competency: key2,
        SoftSkill: key3,
        TechProficiency: key4,
        LanguageSpoken: key5,
        name: key6,
        about: key7,
        detailedSummary: key8,
        transfer1: key9,
        transfer2: key10,
        transfer3: key11,
        calendly: key12,
        website: key13,
        Linkein: key14,
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

module.exports.adduserprofiledata = adduserprofiledata;
