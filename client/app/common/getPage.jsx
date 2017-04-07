import Menu from './Menu';
import React from 'react';

function getPage (menu, selectedMenu, content) {
  return (
    <div className="site-page">
      <div className="site-page-inner">
        <Menu data={menu} selected={selectedMenu} />
        <div className="site-content">
          {content}
        </div>
      </div>
    </div>
  );
}

export default getPage;
