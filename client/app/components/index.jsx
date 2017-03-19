import React from 'react';
import { Link } from 'react-router-dom';

class Components extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "This is Components page"
    };
  }

  render() {
    return (
      <div >
        <ul>
          <li>
            <Link to="/home">
              Home
            </Link>
          </li>
          <li>
            Components
          </li>
        </ul>
        <p>{this.state.content}</p>
        <img src="/client/image/test.gif" />
      </div>
    );
  }
}

export default Components;
