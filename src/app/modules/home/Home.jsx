import React, {PureComponent} from 'react';
import cx from 'classnames';
import {Link} from 'redux-little-router';

import style from './home.scss';
import embraceLogo from '../../../assets/images/embrace_logo.svg';
import embraceFrontXHDPI from '../../../assets/images/embrace_front-xhdpi.jpg';

export default class Home extends PureComponent{
  static propTypes = {};

  render() {
    return (
        <div id="homepage">
          <div className="container">
            <div className={cx('row', 'titleRow')}>
              <div className='col-12'>
                <h1>Smart technology for people living with epilepsy</h1>
              </div>
              <div className='col-12'>
                <button>Buy Now</button>
              </div>
              <div className='col-12'>
                <p>Comes with a 30-day Free Trial Subscription</p>
              </div>
            </div>
            <div className={cx('row', 'infoRow')}>
              <div className="col-md-6">
                <img src={embraceLogo} alt="Embrace from Empatica"/>
                <h2>Your companion for epilepsy management</h2>
                <p>The Embrace watch uses advanced learning algorithms to identify tonic-clonic seizures and send alerts to caregivers. It also provides sleep, rest, and physical activity analysis.</p>
                <button>Discover Embrace Features</button>
              </div>
              <div className="col-md-6">
                <img src={embraceFrontXHDPI} alt="Empatica's Embrace watch"/>
              </div>
            </div>
            <div className={cx('row', 'footerRow')}>
              <div className="col-md">
                <Link href="/login">Login</Link>
              </div>
              <div className="col">
                <Link href="#">Company</Link>
              </div>
              <div className="col">
                <Link href="#">Careers</Link>
              </div>
            </div>
            <div className={cx('row', 'footerRow')}>
              <div className="col">
                <p>© 2017 Empatica Inc. - ISO 13485 Cert. No. 9124.EPTC - All rights reserved </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
