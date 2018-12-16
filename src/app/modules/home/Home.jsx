import React, {PureComponent} from 'react';
import cx from 'classnames';
import Media from 'react-media';
import {Link} from 'redux-little-router';

import style from './home.scss';
import embraceLogo from '../../../assets/images/embrace_logo.svg';
import embraceLogoSm from '../../../assets/images/embrace_logo-sm.svg';
import embraceFrontXHDPI from '../../../assets/images/embrace_front-xhdpi.jpg';

export default class Home extends PureComponent{
  static propTypes = {};

  render() {
    const discoverButton = <button>Discover Embrace Features</button>;

    return (
        <div id="homepage">
          <div className="container">
            <div className={cx('titleArea')}>
              <div className="titleContent">
                <div>
                  <h1>Smart technology for people living with epilepsy</h1>
                </div>
                <div>
                  <button>Buy Now</button>
                </div>
                <div>
                  <p>Comes with a 30-day Free Trial Subscription</p>
                </div>
              </div>
            </div>
            <div className={cx('row', 'infoRow', 'justify-content-center', 'align-items-center')}>
              <div className="col-md-4">
                <Media query="(max-width: 767px)">
                  {matches =>
                      matches ? (
                          <img src={embraceLogoSm} alt="Embrace from Empatica"/>
                      ) : (
                          <img src={embraceLogo} alt="Embrace from Empatica"/>
                      )
                  }
                </Media>
                <br/>
                <br/>
                <h2>Your companion for epilepsy management</h2>
                <br/>
                <p>The Embrace watch uses advanced learning algorithms to identify tonic-clonic seizures and send alerts to caregivers. It also provides sleep, rest, and physical activity analysis.</p>
                <br/>
                <Media query="(min-width: 768px)">
                  {matches => matches && discoverButton}
                </Media>
              </div>
              <div className="col-md-4">
                <img className="watch" src={embraceFrontXHDPI} alt="Empatica's Embrace watch"/>
                <Media query="(max-width: 767px)">
                  {matches => matches && discoverButton}
                </Media>
              </div>
            </div>
            <div className={cx('row', 'footerRow', 'align-items-center')}>
              <div className="col-4">
                <Link href="/login">Login</Link>
              </div>
              <div className="col-4">
                <Link href="#">Company</Link>
              </div>
              <div className="col-4">
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
