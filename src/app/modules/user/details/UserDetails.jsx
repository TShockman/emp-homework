import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Loading from '../../common/loading/Loading';
import OrderList from '../../order/orderList';
import style from './userDetails.scss';

// Component to render a user profile. Fully connected by UserDetailsContainer
// and should be imported from './index.js'
export default class UserDetails extends PureComponent {
  static propTypes = {
    router: PropTypes.object.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string
    }),
    requestUser: PropTypes.func.isRequired,
    id: PropTypes.number,
    push: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    const {requestUser, router, id, push} = this.props;
    const {id: routeId} = router.params;
    if (id === null) {
      // if user is not logged in, redirect them to login
      return push('/login');
    } else if (id.toString() !== routeId) {
      // otherwise naive privileges check: all users only can view their own page
      return push(`/user/${id}`);
    } else {
      // if logged in and attempting to view their own page,
      // dispatch a request for full user information
      return requestUser({id: router.params.id});
    }
  };

  render() {
    let contents;

    // if user has not been retrieved yet, render loading spinner in its place
    if (!this.props.user) {
      contents = <Loading/>;
    } else {
      const {firstName, lastName, email} = this.props.user;
      contents = (
          <div className={cx("card", "welcomeCard")}>
            <h1>Welcome {firstName} {lastName}!</h1>
            <h2>{email}</h2>
          </div>
      );
    }

    return (
        <div className={cx("userDetails", "container-fluid")}>
          <div className="row">
            <div className="col">
              {contents}
            </div>
          </div>
          <OrderList/>
        </div>
    );
  }
}