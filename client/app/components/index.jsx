import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar';
import { URL } from '../constant';

class Components extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { COMPONENTS } = URL;
    return (
      <div >
        <NavBar url={COMPONENTS} />
      </div>
    );
  }
}

export default Components;
