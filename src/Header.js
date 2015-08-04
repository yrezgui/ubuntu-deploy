import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="border bg-header-ubuntu white">
        <nav className="clearfix">
          <div className="sm-col">
            <a href="/" className="btn py2">Ubuntu Deploy</a>
          </div>
          <div className="sm-col-right">
            <a href="/" className="btn py2">About</a>
            <a href="/" className="btn py2">GitHub</a>
          </div>
        </nav>
      </header>
    );
  }
}
