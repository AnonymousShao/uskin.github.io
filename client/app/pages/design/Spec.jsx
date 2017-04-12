import React from 'react';
import ReactDOM from 'react-dom';
import menu from './menu';
import { URL } from '../../constant';
import getPage from '../../common/getPage';
import insertHTML from '../../common/insertHTML';
import Markdown from '../../../docs/design/spec.md';
import highlight from '../../common/highlight';

class Spec extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    highlight();
  }

  render() {
    return getPage(menu, URL.DESIGN_SPEC, insertHTML(Markdown));
  }
}

export default Spec;
