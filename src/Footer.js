import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="p2 right-align">
        <p className="m0">Made by <a href="https://github.com/yrezgui" target="_blank">@yrezgui</a></p>
      </footer>
    );
  }
}
