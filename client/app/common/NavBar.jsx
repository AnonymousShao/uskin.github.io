import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../constant';

class NabVar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = this.props.url;
    const { HOME, DESIGN, COMPONENTS } = URL;

    return (
      <div className="site-navbar">
        <div className="content">
          <div className="logo-field">
            <img src="/client/image/logo-navbar.png" />
          </div>
          <ul className="links">
            <li className={url === HOME ? 'selected' : ''}><Link to={HOME}>首页</Link></li>
            <li className={url === DESIGN ? 'selected' : ''}><Link to={DESIGN}>设计规范</Link></li>
            <li className={url === COMPONENTS ? 'selected' : ''}><Link to={COMPONENTS}>组件</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NabVar;
