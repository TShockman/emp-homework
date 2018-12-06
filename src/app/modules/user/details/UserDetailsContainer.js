import UserDetails from './UserDetails';
import {connect} from 'react-redux';
import {USER_REQUESTED} from '../actions';
import {selectUserState} from '../selectors';
import {selectAuthState} from '../../auth/selectors';
import {push} from 'redux-little-router';

function mapStateToProps(state) {
  const {user} = selectUserState(state);
  const {id} = selectAuthState(state);
  return {
    user,
    id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestUser: ({id}) => dispatch({
      type: USER_REQUESTED,
      id
    }),
    push: href => dispatch(push(href))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
