import React from 'react';
import ReactDOM from 'react-dom';
import menu from './menu';
import { URL } from '../../constant';
import getPage from '../../common/getPage';
import insertHTML from '../../common/insertHTML';
import Markdown from '../../../docs/components/switch/index.md';
import highlight from '../../common/highlight';
// import Demo_Basic_js from '../../../docs/components/switch/basic.js';

class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    highlight();
  }

  getBlock() {
    return (
      <div>
        {insertHTML(Demo_Basic_md)}
      </div>
    );
  }

  render() {
    return getPage(menu, URL.COMPONENTS_SWITCH, insertHTML(Markdown));
  }
}

export default Switch;
