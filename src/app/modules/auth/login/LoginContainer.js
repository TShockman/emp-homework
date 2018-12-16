import {connect} from 'react-redux'
import {LOGIN_REQUESTED} from '../actions';
import Login from './Login';
import {selectAuthState} from '../selectors';
import {push} from 'redux-little-router';


function mapStateToProps(state) {
  // need to get auth state in case user is already logged in
  const {id} = selectAuthState(state);
  return {
    id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestLogin: ({username, password}) => dispatch({
      type: LOGIN_REQUESTED,
      username,
      password
    }),
    push: href => dispatch(push(href))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);