import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './login.scss';

// Login Component used to display the login form and handle
// authorization flow. Intended to be imported from './index.js',
// fully connected with redux
export default class Login extends Component{
  static propTypes = {
    requestLogin: PropTypes.func.isRequired,
    id: PropTypes.number,
    push: PropTypes.func.isRequired
  };

  constructor() {
    super();
    // exception to redux being the single source of truth
    // work-in-progress data is inherently volatile, so it's
    // okay to store it locally in the component state
    this.state = {
      username: '',
      password: ''
    };
  }

  // whenever the form updates, update the volatile state
  handleFormUpdate = event => {
    event.stopPropagation();
    const {target} = event;
    this.setState({[target.id]: target.value});
  };

  // on submit, prevent default handling of the event
  // then dispatch a requestLogin action for the input
  // username and password
  handleSubmit = event => {
    event.stopPropagation();
    event.preventDefault();
    const {requestLogin} = this.props;
    const {username, password} = this.state;
    requestLogin({
      username,
      password
    });
  };

  render() {
    return (
        <div className={cx("container-fluid", "login")}>
          <div className="row">
            <div className="col">
              <form className="card" onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input className="form-control" onChange={this.handleFormUpdate} id="username" name="username" placeholder="Jane_Doe"/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input className="form-control" onChange={this.handleFormUpdate} id="password" name="password" type="password" placeholder="***********"/>
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card">
                <span>Don't have an account? <a href="#">Sign Up</a></span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}