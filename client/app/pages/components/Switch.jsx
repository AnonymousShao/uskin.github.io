import React from 'react';
import menu from './menu';
import { URL } from '../../constant';
import getPage from '../../common/getPage';
import insertHTML from '../../common/insertHTML';
import Markdown from '../../../docs/components/switch/index.md';
import highlight from '../../common/highlight';

class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    highlight();
  }

  render() {
    return getPage(menu, URL.COMPONENTS_SWITCH, insertHTML(Markdown));
  }
}

export default Switch;
