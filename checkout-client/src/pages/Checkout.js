import React, { Component } from "react";
import AddressInput from "../components/AddressInput";
import Map from "../components/GoogleMap";
import { withScriptjs } from "react-google-maps";

export default class Checkout extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      statusInfo: "",
      currentLoc: null,
      destination: null,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    if (!navigator.geolocation) {
      this.setState({
        statusInfo: "Geolocation is not supported by your browser"
      });
    } else {
      if (!this._isMounted) {
        this.setState({
          statusInfo: "Locating…"
        });
      }
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          if (!this.state.currentLoc) {
            this.setState({
              currentLoc: { lat: latitude, lng: longitude },
              statusInfo: `Latitude: ${latitude.toFixed(
                2
              )} °, Longitude: ${longitude.toFixed(2)} °`
            });
          }
        },
        err => {
          this.setState({
            statusInfo: `Unable to retrieve your location ${err.message}`
          });
        }
      );
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  hanldeSelect = event => {
    this.setState({ destination: event.target.value });
  };

  render() {
    const MapLoader = withScriptjs(Map);
    const mapContainerStyle = {
      position: "relative",
      height: "80vh",
      width: "90%",
      margin: "16px auto"
    };
    return (
      <main className="container">
        <h4>Check Out</h4>
        {this.state.statusInfo && (
          <p>Current location: {this.state.statusInfo}</p>
        )}
        <AddressInput selectLoc={e => this.hanldeSelect(e)} />

        {this.state.currentLoc && this.state.destination && (
          <div
            style={mapContainerStyle}
          >
            <MapLoader
              origin={this.state.currentLoc}
              destination={this.state.destination}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcSDSnXW1itPWY8lE20Nmj8ltVheprWik"
              loadingElement={<div className="loadingElement" />}
            />
          </div>
        )}
      </main>
    );
  }
}
