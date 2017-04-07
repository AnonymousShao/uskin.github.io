import React from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ backgroundColor: '#fff' }}>
        <p>
          {
            'There is no match url. Go to '
          }
          <Link to="/home">
            Home
          </Link>
          .
        </p>
      </div>
    );
  }
}

export default NoMatch;
