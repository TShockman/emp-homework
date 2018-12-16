import {connect} from 'react-redux';
import Home from './Home';

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = {};

// empty connection as of now, but left here to acknowledge that
// it is quite likely a homepage could need access to the redux state
export default connect(mapStateToProps, mapDispatchToProps)(Home);
