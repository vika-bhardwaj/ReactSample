import React, { Component } from 'react';

class Login extends Component {
    render(){
        return (
            <div className="container ">
            <div className="form-main-cover">
              <div className="col-sm-3"></div>
              <div className="col-sm-6 form-wrapper">
                <h1>Login</h1>
                <div className="form-group">
                  <label >Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                  <label >Password:</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" name="password"></input>
                </div>
                <button type="button" className="btn btn-primary btn-lg">Login</button>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        );
    }
}
export default Login