import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'This is Home page'
    };
  }

  render() {
    return (
      <div className="home">
        <ul>
          <li>
            Home
          </li>
          <li>
            <Link to="components">
              Components
            </Link>
          </li>
        </ul>
        {this.state.content}
      </div>
    );
  }
}

export default Home;
