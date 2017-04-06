import React from 'react';
import Menu from '../../common/Menu';
import insertHTML from '../../common/insertHTML';
import Text from '../../../docs/design/customized.md';

class Specification extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menu = [{
      title: '设计规范',
      links: [{
        link: '/design/specification',
        data: '设计规范'
      }, {
        link: '/design',
        data: '配色方案'
      }, {
        link: '/design/customized',
        data: '自定义配色',
        selected: true
      }]
    }];

    return (
      <div className="site-page">
        <div className="site-page-inner">
          <Menu data={menu} />
          <div className="site-content">
            {insertHTML(Text)}
          </div>
        </div>
      </div>
    );
  }
}

export default Specification;
