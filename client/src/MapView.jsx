import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import MapContainer from './MapContainer';


class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ['hello'],
    };
  }

  componentDidMount() {
    axios.get(`/address/${this.props.timelineId}`)
      .then(result => this.getAllCoords(result.data));
  }

  getAllCoords(days) {
    const allAddress = [];
    for (let i = 0; i < days.length; i += 1) {
      days[i].events.forEach((event) => {
        if (event.latLong) {
          allAddress.push([event.latLong.lat, event.latLong.lng, event.name]);
        }
      });
    }
    this.setState({
      address: allAddress,
    });
  }

  render() {
    return (
      <div className="container timeline">
        <MapContainer addresses={this.state.address} />
      </div>
    );
  }
}

MapView.propTypes = {
  timelineId: propTypes.string.isRequired,
};
export default MapView;
