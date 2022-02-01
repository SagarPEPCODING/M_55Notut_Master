const db = require('../Model/connection.js');

const addEvent = function ({
  Job_id,
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
  url,
}) {
  console.log(Event_Feature);
  // console.log(imgurl + '.png');
  // const url = imgurl + '.png';
  // console.log('hello addproduct...');
  // const realimgurl = `../publicImageFolder/${imgurl}.png`;
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO event_data SET ?',
      {
        Job_id: Job_id,
        Event_profile: Event_profile,
        Event_description: Event_description,
        Category: Category,
        Event_mode: Event_mode,
        Event_Starting_date: Event_Starting_date,
        Event_Ending_date: Event_Ending_date,
        Event_Type: Event_Type,
        Event_Starting_Time: EventStartingTime,
        Event_Feature: Event_Feature,
        Payment: Payment,
        ImageName: Image_Name,
        EventEndingTime: EventEndingTime,
        Email_Id: Email_id,
        event_url: url,
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

module.exports.addEvent = addEvent;
