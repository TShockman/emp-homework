import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import NotFound from "./modules/notFound";
import connect from "react-redux/es/connect/connect";

// Automatically render the component specified for this route based on
// the routes.js file. If no route is matched, render a 404 component.
function Routing({router})  {
  let Comp;
  if (router.result) {
    Comp = router.result.component;
  } else {
    Comp = NotFound;
  }

  return <Comp router={router}/>
}
Routing.propTypes = {
  router: PropTypes.object
};

function mapStateToProps({router}) {
  return {router};
}

const RoutingContainer = connect(mapStateToProps, {})(Routing);


// Provide the store for the rest of the app. Let Routing handle deciding
// which specific component to render.
export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const {store} = this.props;
    return (
        <Provider store={store}>
          <RoutingContainer/>
        </Provider>
    );
  }
}