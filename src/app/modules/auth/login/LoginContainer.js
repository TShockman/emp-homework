import {connect} from 'react-redux'
import {LOGIN_REQUESTED} from '../actions';
import Login from './Login';
import {selectAuthState} from '../selectors';


function mapStateToProps(state) {
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
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);