import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Link} from 'redux-little-router';
import style from './login.scss';

export default class Login extends Component{
  static propTypes = {
    requestLogin: PropTypes.func.isRequired,
    id: PropTypes.number
  };

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleFormUpdate = event => {
    event.stopPropagation();
    const {target} = event;
    this.setState({[target.id]: target.value});
  };

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
    const {id} = this.props;
    if (id !== null) {
      // TODO
      console.log("Will need to redirect to the proper location here.")
    }

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
                <span>Don't have an account? <Link href="#">Sign Up</Link></span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}