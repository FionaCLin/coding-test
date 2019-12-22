/*global google*/

import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

export default class Map extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      directions: null
    };
  }

  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();
    const origin = this.props.origin;
    const destination = this.props.destination;

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={this.props.origin}
        defaultZoom={13}
      >
        {(this.props.destination && this.state.directions) && (
          <DirectionsRenderer directions={this.state.directions} />
        )}
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`}} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
