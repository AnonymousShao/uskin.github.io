import React from 'react';
import menu from './menu';
import { URL } from '../../constant';
import getPage from '../../common/getPage';
import insertHTML from '../../common/insertHTML';
import Markdown from '../../../docs/components/tab/index.md';
import highlight from '../../common/highlight';

class Tab extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    highlight();
  }

  render() {
    return getPage(menu, URL.COMPONENTS_TAB, insertHTML(Markdown));
  }
}

export default Tab;
