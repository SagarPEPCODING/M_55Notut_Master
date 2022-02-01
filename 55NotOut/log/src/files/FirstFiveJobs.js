import React, { Component } from 'react';
import HomecardJobs from './HomecardJobs';
import axios from 'axios';
import '../css_Files/barrelcss.css';

class FirstFiveJobs extends Component {
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
    let { data } = await axios.get(`/api/users/getallJobs`);
    let datauser = data.user;
    this.setState({ user: datauser });

    let dummyfeaturedeventsindate = [];
    let dummyseealleventsindate = [];
    let dummyfeatureeventsoutdated = [];
    let dummyseealleventsoutdated = [];
    var today = new Date();

    let currentmonth = (today.getMonth() + 1).toString();

    if (currentmonth.length == 1) {
      currentmonth = '0' + currentmonth;
    }

    let currentdate = today.getDate().toString();

    if (currentdate.length == 1) {
      currentdate = '0' + currentdate;
    }

    let date = today.getFullYear().toString() + currentmonth + currentdate;

    this.state.user.map((value) => {
      // featured Events.................................................
      if (value.Feature_access === 'true') {
        let endingdate = value.Ending_Date;
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
      }

      // seeallevents ..............................................
      if (value.Event_access === 'true') {
        let endingdate = value.Ending_Date;
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
      }

      // feature events out dated ......................................
      if (value.Feature_access === 'true') {
        let endingdate = value.Ending_Date;
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
      }

      // see all events out dated.........................................
      if (value.Event_access === 'true') {
        let endingdate = value.Ending_Date;
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
      }
    });

    const sortedActivities1 = dummyfeaturedeventsindate.sort(
      (a, b) => a.endingdate - b.endingdate
    );
    console.log(sortedActivities1);
    this.setState({ featureEventsInDate: sortedActivities1 });

    const sortedActivities2 = dummyseealleventsindate.sort(
      (a, b) => a.endingdate - b.endingdate
    );
    console.log(sortedActivities2);
    this.setState({ seeAllEventsInDate: sortedActivities2 });

    const sortedActivities3 = dummyfeatureeventsoutdated.sort(
      (a, b) => a.endingdate - b.endingdate
    );
    console.log(sortedActivities3);
    this.setState({ featureEventOutDate: sortedActivities3 });

    const sortedActivities4 = dummyseealleventsoutdated.sort(
      (a, b) => a.endingdate - b.endingdate
    );
    console.log(sortedActivities4);
    this.setState({ seeAllEventOutDate: sortedActivities4 });
  }

  render() {
    return (
      <div className='homebarrelcss'>
        <div className='firstcontainer featurejobsindate'>
          {this.state.featureEventsInDate.length > 0 &&
            this.state.featureEventsInDate.map((value, index) => {
              return (
                <HomecardJobs
                  value={value.value}
                  featured={true}
                  Job_profile={value.value.Job_profile}
                  Company_Location={value.value.Company_Location}
                  Company_Type={value.value.Company_Type}
                  Required_Experience={value.value.Required_Experience}
                  Job_Type={value.value.Job_Type}
                  packageJob={value.value.Pay_Range}
                  ImageName={value.value.ImageName}
                  Job_id={value.value.Job_id}
                  eventdescription={value.value.About_Company}
                ></HomecardJobs>
              );
            })}
          {this.state.seeAllEventsInDate.length > 0 &&
            this.state.seeAllEventsInDate.map((value, index) => {
              return (
                <HomecardJobs
                  value={value.value}
                  featured={false}
                  Job_profile={value.value.Job_profile}
                  Company_Location={value.value.Company_Location}
                  Company_Type={value.value.Company_Type}
                  Required_Experience={value.value.Required_Experience}
                  Job_Type={value.value.Job_Type}
                  packageJob={value.value.Pay_Range}
                  ImageName={value.value.ImageName}
                  Job_id={value.value.Job_id}
                  eventdescription={value.value.About_Company}
                ></HomecardJobs>
              );
            })}
          {this.state.featureEventOutDate.length > 0 &&
            this.state.featureEventOutDate.map((value, index) => {
              return (
                <HomecardJobs
                  value={value.value}
                  featured={true}
                  Job_profile={value.value.Job_profile}
                  Company_Location={value.value.Company_Location}
                  Company_Type={value.value.Company_Type}
                  Required_Experience={value.value.Required_Experience}
                  Job_Type={value.value.Job_Type}
                  packageJob={value.value.Pay_Range}
                  ImageName={value.value.ImageName}
                  Job_id={value.value.Job_id}
                  eventdescription={value.value.About_Company}
                ></HomecardJobs>
              );
            })}
          {this.state.seeAllEventOutDate.length > 0 &&
            this.state.seeAllEventOutDate.map((value, index) => {
              return (
                <HomecardJobs
                  value={value.value}
                  featured={false}
                  Job_profile={value.value.Job_profile}
                  Company_Location={value.value.Company_Location}
                  Company_Type={value.value.Company_Type}
                  Required_Experience={value.value.Required_Experience}
                  Job_Type={value.value.Job_Type}
                  packageJob={value.value.Pay_Range}
                  ImageName={value.value.ImageName}
                  Job_id={value.value.Job_id}
                  eventdescription={value.value.About_Company}
                ></HomecardJobs>
              );
            })}
        </div>
        <div className='secondcontainer seealljobsindate'></div>
        <div className='firstcontainer featurejobsoutdate'></div>
        <div className='secondcontainer featurejobsoutdate'></div>
      </div>
    );
  }
}

export default FirstFiveJobs;
