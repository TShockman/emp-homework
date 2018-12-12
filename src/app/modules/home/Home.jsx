import React, {PureComponent} from 'react';
import cx from 'classnames';
import style from './home.scss';

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
              <p>LOGO HERE</p>
              <h2>Your companion for epilepsy management</h2>
              <p>The Embrace watch uses advanced learning algorithms to identify tonic-clonic seizures and send alerts to caregivers. It also provides sleep, rest, and physical activity analysis.</p>
              <button>Discover Embrace Features</button>
            </div>
          </div>
        </div>
    );
  }
}
