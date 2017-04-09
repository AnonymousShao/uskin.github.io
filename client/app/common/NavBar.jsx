import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../constant';

class NabVar extends React.Component {
  constructor(props) {
    super(props);
  }

  getClassName(current) {
    const category = window.location.pathname.split('/')[1];

    return ('/' + category) === current ? 'selected' : '';
  }

  render() {
    const { HOME, DESIGN, COMPONENTS, ABOUT } = URL;

    return (
      <div className="site-navbar">
        <div className="content">
          <div className="logo-field">
            <img src="/client/image/logo-navbar.png" />
          </div>
          <ul className="links">
            <li className={this.getClassName(HOME)}><Link to={HOME}>首页</Link></li>
            <li className={this.getClassName(DESIGN)}><Link to={DESIGN}>设计规范</Link></li>
            <li className={this.getClassName(COMPONENTS)}><Link to={COMPONENTS}>组件</Link></li>
            <li className={this.getClassName(ABOUT)}><Link to={ABOUT}>关于我们</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NabVar;
