import React, {PureComponent} from 'react';
import style from './notFound.scss';

// Common component to render a 404 Not Found page if user navigates
// to an unsupported page
export default class NotFound extends PureComponent {

  render() {
    return <div className="notFound"><h1>The page you were looking for could not be found!</h1></div>
  }
}