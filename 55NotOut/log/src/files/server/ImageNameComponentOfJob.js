import React, { Component } from 'react';
import TextEditor from './TextEditor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
// <TextEditor mydraft={this.mydraft} />
export class ImageNameComponentOfJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeNotFit: false,
      file: '',
    };
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  upload = async (e) => {
    const formdata = new FormData();
    formdata.append('file', this.state.file);

    console.log(formdata);
    // alert(formdata.get('file'));
    console.log(this.state.file);

    if (this.state.file.size / 1000000 > 1.0) {
      this.setState({ sizeNotFit: true });
    } else {
      console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
      try {
        const res = await axios.post('/ProductImageupload', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const { fileName, filePath } = res.data;
        this.setState({ uploadedfile: fileName, filePath });
      } catch (err) {
        if (err.response.status === 5000) {
          console.log('there was a problem with the server');
        } else {
          console.log(err.response.data.msg);
        }
      }
    }
  };

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
    setTimeout(() => {
      console.log(this.state.file);
      console.log(this.state.file.name);
    }, 4000);
  };

  mydraft = (value) => {
    console.log(value);
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter Product Origin' />
          {this.state.sizeNotFit && (
            <div className='1212'>
              size Not valid, Image Size Should Be Less Than or Equal To 1MB
            </div>
          )}

          <div className='imageinputcontainer'>
            <input type='file' onChange={this.onChange}></input>
            <div className='uploadbtn' onClick={this.upload}>
              upload
            </div>
          </div>
          <br />
          <RaisedButton
            label='Continue'
            style={styles.button}
            primary={true}
            onClick={this.continue}
          />

          <RaisedButton
            label='Back'
            style={styles.button}
            primary={false}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default ImageNameComponentOfJob;
