const db = require('../Model/connection.js');

const addproduct = function (
  Job_id,
  Organisation_Name,
  Organisation_Motive,
  Information_about_Organisation,
  Organisation_Founder,
  Organisation_Co_Founder,
  Organisation_mail_id,
  Contact_no,
  Number_of_members_in_Oranisation,
  question,
  Organisation_establishment_Year,
  Type_of_Organisation,
  Image_Name,
  userEmailId
) {
  console.log(Job_id);
  console.log(Organisation_Name + '  ' + 'llll');
  console.log(Information_about_Organisation);
  console.log(Image_Name + '   ' + 'lsdk');

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `update organisation_data SET Organisation_Name = '${Organisation_Name}',about_Organisation='${Information_about_Organisation}',Organisation_Founder='${Organisation_Founder}', Organisation_Co_Founder='${Organisation_Co_Founder}',Organisation_mail_id='${Organisation_mail_id}',Contact_no='${Contact_no}', Number_of_members='${Number_of_members_in_Oranisation}',establishment_Year='${Organisation_establishment_Year}', Type_of_Organisation='${Type_of_Organisation}', ImageName='${Image_Name}',userEmailId='${userEmailId}' where Job_id='${Job_id}'`,

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

module.exports.addproduct = addproduct;
