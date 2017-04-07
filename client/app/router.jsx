import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { NavBar, Bottom } from './common';
import { Home, Design, Components, NoMatch } from './pages';
import { URL } from './constant';
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
            <Redirect exact from="/" to={URL.HOME} />
            <Route path={URL.HOME} component={Home} />
            <Redirect exact from={URL.DESIGN} to={URL.DESIGN_SPEC} />
            <Route path={URL.DESIGN_SPEC} component={Design.Spec} />
            <Route path={URL.DESIGN_COLOR} component={Design.Color} />
            <Route path={URL.DESIGN_CUSTOMIZED} component={Design.Customized} />
            <Redirect exact from={URL.COMPONENTS} to={URL.COMPONENTS_SWITCH} />
            <Route path={URL.COMPONENTS_SWITCH} component={Components.Switch} />
            <Route component={NoMatch} />
          </Switch>
          <Bottom />
        </div>
      </Router>
    );
  }
}

export default Model;
