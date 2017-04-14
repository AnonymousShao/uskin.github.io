import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, selected } = this.props;

    return (
      <div className="site-menu">
        {data.map((d, index) => 
          <div key={index} className="site-menu-block">
            <div className="site-menu-title">{d.title}</div>
            <ul className="site-menu-links">
              {d.links.map((link, i) =>
                <li key={i} className={selected === link.link ? 'selected' : ''}><Link to={link.link}>{link.data}</Link></li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Menu;
