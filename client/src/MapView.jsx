import React from 'react';
import axios from 'axios';
import MapContainer from './MapContainer';

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('MAP VIEW MOUNTED', this.props.timelineId);
    axios.get(`/address/${this.props.timelineId}`)
      .then(result => this.getAllCoords(result.data));
  }

  getAllCoords(days) {
    let allAddress = [];
    for (let i = 0; i < days.length; i++) {
      days[i].events.forEach(event =>
        allAddress.push([event.latLong.lat, event.latLong.lng]));
    }
    console.log(allAddress);
  }

  render() {
    return (
      <div>THIS IS THE MAP VIEW
        <MapContainer />
      </div>
    );
  }
}

export default MapView;
