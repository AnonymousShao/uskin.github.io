import React from 'react';

class Bottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = this.props.url;

    return (
      <div className="site-bottom">
        <div className="github-area">
          <p className="github-header">
            <img className="icon-github" src="/client/image/icon-github.png" />
            GitHub
          </p>
          <ul className="github-links">
            <li>
              <div>Repository</div>
            </li>
            <li>
              <div>Releases Note</div>
            </li>
            <li>
              <div>Report Bug</div>
            </li>
          </ul>
        </div>
        <p className="license">Copyright © 2017 MIT License</p>
      </div>
    );
  }
}

export default Bottom;
