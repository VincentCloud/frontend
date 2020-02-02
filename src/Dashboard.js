import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const getInfoWindowString = place => `
    <div>
      <div style="font-size: 16px;">
        ${place.name}
      </div>
      <div style="font-size: 14px;">
        <span style="color: grey;">
        ${place.rating}
        </span>
        <span style="color: orange;">${String.fromCharCode(9733).repeat(
          Math.floor(place.rating)
        )}</span><span style="color: lightgrey;">${String.fromCharCode(
  9733
).repeat(5 - Math.floor(place.rating))}</span>
      </div>
      <div style="font-size: 14px; color: grey;">
        ${place.types[0]}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${'$'.repeat(place.price_level)}
      </div>
      <div style="font-size: 14px; color: green;">
        ${place.opening_hours.open_now ? 'Open' : 'Closed'}
      </div>
    </div>`;

const handleApiLoaded = (map, maps, places) => {
  const markers = [];
  const infowindows = [];

  places.forEach(place => {
    markers.push(
      new maps.Marker({
        position: {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng
        },
        map
      })
    );

    infowindows.push(
      new maps.InfoWindow({
        content: getInfoWindowString(place)
      })
    );
  });
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MarkerInfoWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: []
    };
  }

  componentDidMount() {
    fetch('places.json')
      .then(response => response.json())
      .then(data => {
        data.results.forEach(result => {
          result.show = false; // eslint-disable-line no-param-reassign
        });
        this.setState({ places: data.results });
      });
  }

  static defaultProps = {
    center: {
      lat: 30.59285,
      lng: 114.305542
    },
    zoom: 11
  };

  renderMarker(map, maps) {
    let marker = new maps.Marker({
      position: { lat: 30.59285, lng: 114.305542 },
      map,
      title: 'Hello World!'
    });
  }

  renderMarkers(map, maps) {
    let markers = [];
    let i = 0;
    for (i; i < 10; i++) {
      markers.push(
        new maps.Marker({
          position: { lat: 30.59285 + 0.01 * i, lng: 114.305542 + 0.01 * i },
          map
        })
      );
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB9spSr2pnx5bvTidoT9YCp2Dd7VpAH6Fw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default MarkerInfoWindow;
