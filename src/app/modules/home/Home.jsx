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
            <div className={cx('row', 'titleRow', 'justify-content-center', 'align-items-center')}>
              <div className='col-9'>
                <h1>Smart technology for people living with epilepsy</h1>
              </div>
              <div className='col-9'>
                <button>Buy Now</button>
              </div>
              <div className='col-9'>
                <p>Comes with a 30-day Free Trial Subscription</p>
              </div>
            </div>
            <div className={cx('row', 'infoRow', 'justify-content-center', 'align-items-center')}>
              <div className="col-sm-4">
                <img src={embraceLogo} alt="Embrace from Empatica"/>
                <br/>
                <br/>
                <h2>Your companion for epilepsy management</h2>
                <br/>
                <p>The Embrace watch uses advanced learning algorithms to identify tonic-clonic seizures and send alerts to caregivers. It also provides sleep, rest, and physical activity analysis.</p>
                <br/>
                <button>Discover Embrace Features</button>
              </div>
              <div className="col-sm-4">
                <img className="watch" src={embraceFrontXHDPI} alt="Empatica's Embrace watch"/>
              </div>
            </div>
            <div className={cx('row', 'footerRow', 'align-items-center')}>
              <div className="col-sm">
                <Link href="/login">Login</Link>
              </div>
              <div className="col">
                <Link href="#">Company</Link>
              </div>
              <div className="col">
                <Link href="#">Careers</Link>
              </div>
            </div>
            <div className={cx('row', 'footerRow', 'align-items-center')}>
              <div className="col">
                <p>© 2017 Empatica Inc. - ISO 13485 Cert. No. 9124.EPTC - All rights reserved </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
