import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { NavBar, Bottom } from './common';
import { Home, Design, Components, About, NoMatch } from './pages';
import { URL } from './constant';
require('../style/index.less');

class Model extends React.Component {
  constructor(props) {
    super(props);
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
            <Redirect exact from={URL.COMPONENTS} to={URL.COMPONENTS_BREADCRUMB} />
            <Route path={URL.COMPONENTS_BREADCRUMB} component={Components.Breadcrumb} />
            <Route path={URL.COMPONENTS_BUTTON} component={Components.Button} />
            <Route path={URL.COMPONENTS_BUTTONGROUP} component={Components.ButtonGroup} />
            <Route path={URL.COMPONENTS_DROPDOWN} component={Components.Dropdown} />
            <Route path={URL.COMPONENTS_DROPDOWNBUTTON} component={Components.DropdownButton} />
            <Route path={URL.COMPONENTS_INPUTNUMBER} component={Components.InputNumber} />
            <Route path={URL.COMPONENTS_INPUTSEARCH} component={Components.InputSearch} />
            <Route path={URL.COMPONENTS_MENU} component={Components.Menu} />
            <Route path={URL.COMPONENTS_NOTIFICATION} component={Components.Notification} />
            <Route path={URL.COMPONENTS_PAGINATION} component={Components.Pagination} />
            <Route path={URL.COMPONENTS_PANEL} component={Components.Panel} />
            <Route path={URL.COMPONENTS_SLIDER} component={Components.Slider} />
            <Route path={URL.COMPONENTS_STEP} component={Components.Step} />
            <Route path={URL.COMPONENTS_SWITCH} component={Components.Switch} />
            <Route path={URL.COMPONENTS_TAB} component={Components.Tab} />
            <Route path={URL.COMPONENTS_TABLE} component={Components.Table} />
            <Route path={URL.COMPONENTS_TIP} component={Components.Tip} />
            <Route path={URL.COMPONENTS_TOOLTIP} component={Components.Tooltip} />
            <Redirect exact from={URL.ABOUT} to={URL.ABOUT_MEMBERS} />
            <Route path={URL.ABOUT_MEMBERS} component={About.Members} />
            <Route component={NoMatch} />
          </Switch>
          <Bottom />
        </div>
      </Router>
    );
  }
}

export default Model;
