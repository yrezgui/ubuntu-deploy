import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ChooseCloud from './ChooseCloud';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-column bg-ubuntu">
        <Header />
        <div className="flex-auto sm-flex py4 px10">
          <div className="flex-auto rounded ubuntu-box-shadow bg-white main-content">
            <main className="flex-auto py2 px4">
              <h1 className="navy center">Click-to-deploy Ubuntu</h1>
              <p className="center mb4">Every request is made directly from the browser to the selected   provider API. No credentials are stored.</p>
              <ChooseCloud />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
