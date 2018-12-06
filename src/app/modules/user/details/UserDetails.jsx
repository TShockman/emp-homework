import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'reactstrap';
import Loading from '../../common/loading/Loading';
import {push} from 'redux-little-router';

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
    id: PropTypes.number
  };

  componentDidMount = () => {
    const {requestUser, router, id} = this.props;
    const {id: routeId} = router.params;

    if (id === null) {
      push('/login');
    } else if (id !== routeId) {
      console.log('Can only view user logged in.');
      // TODO: handle this differently?
      push(`/user/${id}`);
    } else {
      requestUser({id: router.params.id});
    }
  };

  render() {
    if (!this.props.user) {
      return <Loading/>;
    }

    const {id, firstName, lastName, email} = this.props.user;
    return (
        <Card>
          <h3>{id}</h3>
          <h3>{firstName}</h3>
          <h3>{lastName}</h3>
          <h3>{email}</h3>
        </Card>
    );
  }
}