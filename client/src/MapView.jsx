import React from 'react';
import axios from 'axios';

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('MAP VIEW MOUNTED', this.props.timelineName);
    axios.get('/address')
      .then(result => console.log(result, 'send and recieved '));
  }

  render() {
    return (
      <div>THIS IS THE MAP VIEW </div>
    );
  }
}

export default MapView;
