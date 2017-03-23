import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar';
import { URL } from '../constant';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'This is Home page'
    };
  }

  render() {
    const { HOME } = URL;

    return (
      <div className="home">
        <NavBar url={HOME} />
      </div>
    );
  }
}

export default Home;
