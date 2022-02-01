import React, { Component } from 'react';
import HomecardEvents from './HomecardEvents';
import axios from 'axios';
import '../css_Files/barrelcss.css';

class FirstFiveEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: '',
      user: [],
      featureEventsInDate: [],
      seeAllEventsInDate: [],
      featureEventOutDate: [],
      seeAllEventOutDate: [],
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallEvents`);
    let datauser = data.user;
    console.log(datauser);
    this.setState({ user: datauser });
    console.log(this.state.user);

    let dummyfeaturedeventsindate = [];
    let dummyseealleventsindate = [];
    let dummyfeatureeventsoutdated = [];
    let dummyseealleventsoutdated = [];
    var today = new Date();

    let currentmonth = (today.getMonth() + 1).toString();

    if (currentmonth.length == 1) {
      console.log(currentmonth.length);
      currentmonth = '0' + currentmonth;
    }

    let currentdate = today.getDate().toString();

    if (currentdate.length == 1) {
      currentdate = '0' + currentdate;
    }

    let date = today.getFullYear().toString() + currentmonth + currentdate;

    this.state.user.map((value) => {
      // featured Events.................................................
      console.log(value);
      if (
        value.Feature_access === 'true' &&
        value.Event_Ending_date !== null &&
        value.Event_Ending_date.length > 0
      ) {
        let endingdate = value.Event_Ending_date;
        let endingdatearr = endingdate.split('-');
        let endingdateofevent =
          endingdatearr[0] + endingdatearr[1] + endingdatearr[2];
        let endingdateparseint = parseInt(endingdateofevent);
        let currentdateis = parseInt(date);

        if (endingdateparseint >= currentdateis) {
          let obj = {
            value: value,
            endingdate: endingdateparseint,
          };
          dummyfeaturedeventsindate.push(obj);
        }

        const sortedActivities = dummyfeaturedeventsindate.sort(
          (a, b) => b.endingdate - a.endingdate
        );
        console.log(sortedActivities);
        this.setState({ featureEventsInDate: sortedActivities });
      }

      // seeallevents ..............................................
      if (
        value.Event_access === 'true' &&
        value.Event_Ending_date !== null &&
        value.Event_Ending_date.length > 0
      ) {
        let endingdate = value.Event_Ending_date;
        let endingdatearr = endingdate.split('-');
        let endingdateofevent =
          endingdatearr[0] + endingdatearr[1] + endingdatearr[2];
        let endingdateparseint = parseInt(endingdateofevent);
        let currentdateis = parseInt(date);
        if (endingdateparseint >= currentdateis) {
          let obj = {
            value: value,
            endingdate: endingdateparseint,
          };
          dummyseealleventsindate.push(obj);
        }

        const sortedActivities = dummyseealleventsindate.sort(
          (a, b) => b.endingdate - a.endingdate
        );
        console.log(sortedActivities);
        this.setState({ seeAllEventsInDate: sortedActivities });
      }

      // feature events out dated ......................................
      if (
        value.Feature_access === 'true' &&
        value.Event_Ending_date !== null &&
        value.Event_Ending_date.length > 0
      ) {
        let endingdate = value.Event_Ending_date;
        let endingdatearr = endingdate.split('-');
        let endingdateofevent =
          endingdatearr[0] + endingdatearr[1] + endingdatearr[2];
        let endingdateparseint = parseInt(endingdateofevent);
        let currentdateis = parseInt(date);

        if (endingdateparseint < currentdateis) {
          let obj = {
            value: value,
            endingdate: endingdateparseint,
          };
          dummyfeatureeventsoutdated.push(obj);
        }

        const sortedActivities = dummyfeatureeventsoutdated.sort(
          (a, b) => b.endingdate - a.endingdate
        );
        console.log(sortedActivities);
        this.setState({ featureEventOutDate: sortedActivities });
      }

      // see all events out dated.........................................
      if (
        value.Event_access === 'true' &&
        value.Event_Ending_date !== null &&
        value.Event_Ending_date.length > 0
      ) {
        let endingdate = value.Event_Ending_date;
        let endingdatearr = endingdate.split('-');
        let endingdateofevent =
          endingdatearr[0] + endingdatearr[1] + endingdatearr[2];
        let endingdateparseint = parseInt(endingdateofevent);
        let currentdateis = parseInt(date);
        if (endingdateparseint < currentdateis) {
          let obj = {
            value: value,
            endingdate: endingdateparseint,
          };
          dummyseealleventsoutdated.push(obj);
        }

        const sortedActivities = dummyseealleventsoutdated.sort(
          (a, b) => b.endingdate - a.endingdate
        );
        console.log(sortedActivities);
        this.setState({ seeAllEventOutDate: sortedActivities });
      }
    });
  }

  render() {
    return (
      <div className='homebarrelcss'>
        <div className='firstcontainer featuredprofileindate'>
          {this.state.featureEventsInDate.length > 0 &&
            this.state.featureEventsInDate.map((value, index) => {
              console.log('dfd,f,dfm,dfm,dsmf,m,dsmf' + value.Job_id);

              return (
                <HomecardEvents
                  featured={true}
                  Job_id={value.value.Job_id}
                  name={value.value.Event_profile}
                  eventtype={value.value.Event_Type}
                  eventdescription={value.value.Event_description}
                ></HomecardEvents>
              );
            })}
        </div>
        <div className='secondcontainer seealleventsindate'>
          {this.state.seeAllEventsInDate.length > 0 &&
            this.state.seeAllEventsInDate.map((value, index) => {
              console.log('dfd,f,dfm,dfm,dsmf,m,dsmf' + value.Job_id);

              return (
                <HomecardEvents
                  featured={false}
                  Job_id={value.value.Job_id}
                  name={value.value.Event_profile}
                  eventtype={value.value.Event_Type}
                  eventdescription={value.value.Event_description}
                ></HomecardEvents>
              );
            })}
        </div>
        <div className='firstcontainer featuredprofileoutdate'>
          {this.state.featureEventOutDate.length > 0 &&
            this.state.featureEventOutDate.map((value, index) => {
              console.log('dfd,f,dfm,dfm,dsmf,m,dsmf' + value.Job_id);

              return (
                <HomecardEvents
                  featured={true}
                  Job_id={value.value.Job_id}
                  name={value.value.Job_profile}
                  description={value.value.Description}
                  imgurl={value.value.ImageName}
                  Event_profile={value.value.Event_profile}
                  Category={value.value.Category}
                  Event_mode={value.value.Event_mode}
                  Event_Starting_date={value.value.Event_Starting_date}
                  Event_Ending_date={value.value.Event_Ending_date}
                  Event_Starting_time={value.value.Event_Starting_time}
                  EventEndingTime={value.value.EventEndingTime}
                ></HomecardEvents>
              );
            })}
        </div>
        <div className='secondcontainer seealleventsoutdate'>
          {this.state.seeAllEventOutDate.length > 0 &&
            this.state.seeAllEventOutDate.map((value, index) => {
              console.log('dfd,f,dfm,dfm,dsmf,m,dsmf' + value.Job_id);

              return (
                <HomecardEvents
                  featured={true}
                  Job_id={value.value.Job_id}
                  name={value.value.Job_profile}
                  description={value.value.Description}
                  imgurl={value.value.ImageName}
                  Event_profile={value.value.Event_profile}
                  Category={value.value.Category}
                  Event_mode={value.value.Event_mode}
                  Event_Starting_date={value.value.Event_Starting_date}
                  Event_Ending_date={value.value.Event_Ending_date}
                  Event_Starting_time={value.value.Event_Starting_time}
                  EventEndingTime={value.value.EventEndingTime}
                ></HomecardEvents>
              );
            })}
        </div>
      </div>
    );
  }
}

export default FirstFiveEvents;
