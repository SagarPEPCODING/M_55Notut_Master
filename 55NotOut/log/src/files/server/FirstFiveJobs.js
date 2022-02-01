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

        const sortedActivities = dummyfeaturedeventsindate.sort(
          (a, b) => a.endingdate - b.endingdate
        );
        console.log(sortedActivities);
        this.setState({ featureEventsInDate: sortedActivities });
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

        const sortedActivities = dummyseealleventsindate.sort(
          (a, b) => a.endingdate - b.endingdate
        );
        console.log(sortedActivities);
        this.setState({ seeAllEventsInDate: sortedActivities });
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

        const sortedActivities = dummyfeatureeventsoutdated.sort(
          (a, b) => a.endingdate - b.endingdate
        );
        console.log(sortedActivities);
        this.setState({ featureEventOutDate: sortedActivities });
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

        const sortedActivities = dummyseealleventsoutdated.sort(
          (a, b) => a.endingdate - b.endingdate
        );
        console.log(sortedActivities);
        this.setState({ seeAllEventOutDate: sortedActivities });
      }
    });
  }

  render() {
    console.log(this.state.featureEventsInDate);
    console.log(this.state.seeAllEventsInDate);
    console.log(this.state.featureEventOutDate);
    console.log(this.state.seeAllEventOutDate);
    return (
      <div className='homebarrelcss'>
        <div className='firstcontainer featurejobsindate'>
          {this.state.featureEventsInDate.length > 0 &&
            this.state.featureEventsInDate.map((value, index) => {
              return (
                <HomecardJobs
                  featured={true}
                  Job_id={value.value.Job_id}
                  table={this.state.table}
                  name={value.value.Job}
                  description={value.value.Description}
                  imgurl={value.value.ImageUrl}
                ></HomecardJobs>
              );
            })}
        </div>
        <div className='secondcontainer seealljobsindate'>
          {this.state.seeAllEventsInDate.length > 0 &&
            this.state.seeAllEventsInDate.map((value, index) => {
              return (
                <HomecardJobs
                  featured={false}
                  Job_id={value.value.Job_id}
                  table={this.state.table}
                  name={value.value.Job}
                  description={value.value.Description}
                  imgurl={value.value.ImageUrl}
                ></HomecardJobs>
              );
            })}
        </div>
        <div className='firstcontainer featurejobsoutdate'>
          {this.state.featureEventOutDate.length > 0 &&
            this.state.featureEventOutDate.map((value, index) => {
              return (
                <HomecardJobs
                  featured={true}
                  Job_id={value.value.Job_id}
                  table={this.state.table}
                  name={value.value.Job}
                  description={value.value.Description}
                  imgurl={value.value.ImageUrl}
                ></HomecardJobs>
              );
            })}
        </div>
        <div className='secondcontainer featurejobsoutdate'>
          {this.state.seeAllEventOutDate.length > 0 &&
            this.state.seeAllEventOutDate.map((value, index) => {
              return (
                <HomecardJobs
                  featured={false}
                  Job_id={value.value.Job_id}
                  table={this.state.table}
                  name={value.value.Job}
                  description={value.value.Description}
                  imgurl={value.value.ImageUrl}
                ></HomecardJobs>
              );
            })}
        </div>
      </div>
    );
  }
}

export default FirstFiveJobs;
