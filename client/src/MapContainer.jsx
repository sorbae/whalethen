import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import propTypes from 'prop-types';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: !this.state.showingInfoWindow,
    });
  }

  onMapClicked() {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  render() {
    return (
      <Map google={this.props.google} zoom={11}>
        <Marker
          name="Starting location"
          onClick={this.onMarkerClick}
        />
        {this.props.addresses.map((spot) => {
        return (
          <Marker
            key={spot[0]}
            name={spot[2]}
            position={{ lat: spot[0], lng: spot[1] }}
            onClick={this.onMarkerClick}
          />);
        }) }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
MapContainer.propTypes = {
  addresses: propTypes.instanceOf(Array).isRequired,
  google: propTypes.instanceOf(Object),
};
export default GoogleApiWrapper({
  apiKey: process.env.MAP_MARKER,
})(MapContainer);
