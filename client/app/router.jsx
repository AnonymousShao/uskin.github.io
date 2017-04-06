import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { NavBar, Bottom } from './common';
import { Home, Design, Components, NoMatch } from './pages';
import hljs from 'highlight.js';
require('../style/index.less');

class Model extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    hljs.initHighlightingOnLoad();
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Redirect exact from="/design" to="/design/specification" />
            <Route path="/design/specification" component={Design.Specification} />
            <Route path="/design/customized" component={Design.Customized} />
            <Route path="/components" component={Components} />
            <Route component={NoMatch} />
          </Switch>
          <Bottom />
        </div>
      </Router>
    );
  }
}

export default Model;
