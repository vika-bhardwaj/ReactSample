import React, { Component } from 'react';

class Home extends Component {
  constructor (props){
    super(props);
    this.state = {};
    this.loginHandle = this.loginHandle.bind(this);
  }
  loginHandle () {
    
    this.props.history.push('/login');
  }
    render(){
        return (
            <div className="container">
            <div className="jumbotron">
              <div className="container">
                <h1 className="display-3">Welcome to {this.props.title}</h1>
                <p className="lead">This is a sample application used to market and its websites. </p>
                <hr className="my-4"></hr>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" onClick={this.loginHandle} role="button">Login</a>
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default Home;