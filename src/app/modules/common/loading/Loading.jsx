import React, {PureComponent} from 'react';
import style from './loading.scss';

// Common component to display a loading animation where content
// has not yet loaded from server
export default class Loading extends PureComponent {
  render() {
    return <div className="loading"><div className="loader"/></div>;
  }
};