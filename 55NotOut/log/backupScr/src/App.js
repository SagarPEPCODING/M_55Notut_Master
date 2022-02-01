import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export class App extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId='297472787998-6to9fb3dggj255jullr37i5t5q6k5ike.apps.googleusercontent.com'
          buttontText='Login'
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}

export default App;
