import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label, Input, Card} from 'reactstrap';

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
        <Card>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input onChange={this.handleFormUpdate} id="username" name="username" placeholder="Jane_Doe"/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input onChange={this.handleFormUpdate} id="password" name="password" type="password" placeholder="***********"/>
            </FormGroup>
            <Button className="btn btn-primary" onClick={this.handleSubmit}>Login</Button>
          </Form>
        </Card>
    );
  }
}