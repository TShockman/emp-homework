import React, {PureComponent} from 'react';
import style from './loading.scss';

export default class Loading extends PureComponent {
  render() {
    return <div className="loading"><div className="loader"/></div>;
  }
};