import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  responseGoogle = (response) => {
    this.props.myresponse(response.profileObj);
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId='632180617080-bta9u50c8e14p3h15g3do326njaq1jf5.apps.googleusercontent.com'
          buttontText='Login'
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}

export default Auth;
