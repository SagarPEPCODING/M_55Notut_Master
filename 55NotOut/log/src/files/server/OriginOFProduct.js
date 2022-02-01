import React, { Component } from 'react';
import TextEditor from './TextEditor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// <TextEditor mydraft={this.mydraft} />
export class OriginOFProduct extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
          <TextField
            hintText='Enter Your Product Origin'
            floatingLabelText='Product Origin'
            onChange={this.props.handleChange('ProductOrgin')}
            defaultValue={values.ProductOrgin}
          ></TextField>
          {/* <TextEditor
            mydraft={this.mydraft}
            onChange={this.props.handleChange('description')}
          /> */}
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

export default OriginOFProduct;
