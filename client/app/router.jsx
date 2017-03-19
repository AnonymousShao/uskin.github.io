import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Components from './components/index';
import Home from './home/index';
import NoMatch from './error/index';
require('../style/index.less');

class Model extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/components" component={Components} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default Model;
