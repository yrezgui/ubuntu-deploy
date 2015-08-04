import React from 'react';

export default class ChooseCloud extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="clearfix center mb2">
        <div
          className="col col-4 choose-cloud-provider rounded"
          style={{backgroundImage: 'url(img/aws.png)'}}
        />
        <div
          className="col col-4 choose-cloud-provider rounded"
          style={{backgroundImage: 'url(img/digital-ocean.png)'}}
        />
        <div
          className="col col-4 choose-cloud-provider rounded"
          style={{backgroundImage: 'url(img/google-cloud.png)'}}
        />
      </div>
    );
  }
}
