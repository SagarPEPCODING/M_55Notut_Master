const db = require('../Model/connection.js');

const adduseredit = function ({
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
  key16,
}) {
  return new Promise(function (resolve, reject) {
    console.log(key15);

    key1 = key1.substring(0, key1.length - 1);
    key2 = key2.substring(0, key2.length - 1);
    key3 = key3.substring(0, key3.length - 1);
    key4 = key4.substring(0, key4.length - 1);
    key5 = key5.substring(0, key5.length - 1);
    key15 = key15.substring(0, key15.length - 1);

    let ans = db.query(
      `UPDATE userprofile_data SET IterestedIn = '${key1}', Competency = '${key2}', SoftSkill = '${key3}',  TechProficiency = '${key4}',  LanguageSpoken = '${key5}',  name = '${key6}', about = '${key7}', detailedSummary = '${key8}',  transfer1 = '${key9}', transfer2 = '${key10}', transfer3 = '${key11}', calendly = '${key12}', website = '${key13}', Linkein = '${key14}', experiencein = '${key15}' where Email_id = '${key16}' `,
      // {
      //   Email_id: key15,
      //   IterestedIn: key1,
      //   Competency: key2,
      //   SoftSkill: key3,
      //   TechProficiency: key4,
      //   LanguageSpoken: key5,
      //   name: key6,
      //   about: key7,
      //   detailedSummary: key8,
      //   transfer1: key9,
      //   transfer2: key10,
      //   transfer3: key11,
      //   calendly: key12,
      //   website: key13,
      //   Linkein: key14,
      // },
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

module.exports.adduseredit = adduseredit;
