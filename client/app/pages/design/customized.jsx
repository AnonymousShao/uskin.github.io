import React from 'react';
import menu from './menu';
import { URL } from '../../constant';
import getPage from '../../common/getPage';
import insertHTML from '../../common/insertHTML';
import Markdown from '../../../docs/design/customized.md';

class Customized extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return getPage(menu, URL.DESIGN_CUSTOMIZED, insertHTML(Markdown));
  }
}

export default Customized;
