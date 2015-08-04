import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="flex-first px2" style={{width: '10rem'}}>
        <ul className="mt2 mb2 steps">
          <li className="done">
            <span>Step 1</span>
          </li>
          <li className="active">
            <span>Step 2</span>
          </li>
          <li className="inactive">
            <span>Step 3</span>
          </li>
          <li className="inactive">
            <span>Step 4</span>
          </li>
        </ul>
      </nav>
    );
  }
}
