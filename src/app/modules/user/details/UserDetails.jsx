import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Loading from '../../common/loading/Loading';
import OrderList from '../../order/orderList';
import style from './userDetails.scss';
import cx from 'classnames';

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
      return push('/login');
    } else if (id.toString() !== routeId) {
      // naive privileges check: all users only can view their own page
      return push(`/user/${id}`);
    } else {
      return requestUser({id: router.params.id});
    }
  };

  render() {
    let contents;
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