const db = require("../Model/connection.js");

const addproduct = function (
  Event_profile,
  Event_description,
  Category,
  Event_mode,
  Event_Starting_date,
  Event_Ending_date,
  Event_Type,
  EventStartingTime,
  Event_Feature,
  Payment,
  Image_Name,
  EventEndingTime,
  Email_id,
  Job_id
) {
  console.log(Job_id);
  console.log(Event_profile + "  " + "llll");
  console.log(Event_profile);
  console.log(Event_description + "   " + "lsdk");
  //   console.log(Image_Name);
  //   console.log(Job_id);
  //   console.log(Job_id + ' ' + 'jjiiijii');
  // console.log('hello addproduct...');
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `update event_data SET Event_profile='${Event_profile}',Event_description='${Event_description}',Category='${Category}',Event_mode='${Event_mode}',Event_Starting_date='${Event_Starting_date}',Event_Ending_date='${Event_Ending_date}',Event_Type='${Event_Type}',Event_Starting_Time='${EventStartingTime}',Event_Feature='${Event_Feature}',Payment='${Payment}',ImageName='${Image_Name}',EventEndingTime='${EventEndingTime}',Email_id='${Email_id}' where Job_id = '${Job_id}' `,

      function (err, res) {
        if (err) {
          console.log("err");
          reject(err);
          return;
        } else {
          console.log("resolve");
          resolve(res);
        }
      }
    );
  });
};

module.exports.addproduct = addproduct;
