import React, { Component } from 'react';
import axios from 'axios';
import NewHeader from './NewHeader';
import Footer from './Footer';
import '../css_Files/staticpagedisplaycss.css';
import DescriptionEditorOfStaticPage from './DescriptionEditorOfStaticPage';
import SeeAllHeader from './SeeAllHeader';
import HomeResponsiveHeader from './HomeResponsiveHeader';

export class StaticPageData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mydata: [],
      myimage: '',
      myimagurl: '',
      detailedsummary: '',
      datacome: false,
    };
  }

  componentDidMount = async () => {
    let url = window.location.href;
    // let decodeurl = atob(url);
    let arr = url.split('/');
    console.log(arr);
    let urlkey = arr[arr.length - 1];
    let { data } = await axios.get(
      `/api/users/getuserstaticpagedata/${urlkey}`
    );
    console.log(data);
    this.setState({ mydata: data.user[0] });
    console.log(data.user[0].filename);
    this.setState({ myimage: data.user[0].filename });
    let imagename = data.user[0].filename;
    let requiredimage = require(`../publicImageFolderstaticpage/${imagename}`);
    console.log(requiredimage);
    console.log(requiredimage.default);
    console.log(data.user[0].description);
    this.setState({ detailedsummary: data.user[0].description });
    this.setState({ myimagurl: requiredimage.default });
    this.setState({ datacome: true });
  };

  render() {
    console.log(this.state.detailedsummary);
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='staticpagecontainer'>
          <div className='staticpageuuidcontainer'>
            <div className='staticuuid'>ID :- </div>
            <div className='dtaticuuiddata'>{this.state.mydata.uuid}</div>
          </div>
          <div className='staticpagetitle'>
            <div className='statictitle'>Title :-</div>
            <div className='statictitledata'>{this.state.mydata.title}</div>
          </div>
          <div className='staticpagedescription'>
            <div className='staticdescription'>Description :- </div>
            {this.state.datacome && (
              <DescriptionEditorOfStaticPage
                value={this.state.detailedsummary}
              ></DescriptionEditorOfStaticPage>
            )}
          </div>
          <div className='staticpagefilename'>
            <div className='staticimage'>Image is :- </div>
            <img src={this.state.myimagurl} className='imgsrc' />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default StaticPageData;
