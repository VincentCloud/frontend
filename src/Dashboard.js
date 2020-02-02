import React, {Component} from "react";
import GoogleMapReact from "google-map-react";

const getInfoWindowString = place => `
    <div>
      <div style="font-size: 16px;">
        ${place.description}
      </div>
      <div style="font-size: 14px;">
        <span style="color: grey;">
           Contact: ${place.contact}
        </span>
      </div>
      <div style="font-size: 14px; color: grey;"">
        Items Requested: ${place.items}.
      </div>
    </div>`;

const handleApiLoaded = (map, maps, places) => {
    const markers = [];
    const infowindows = [];

    places.forEach((place) => {
        markers.push(new maps.Marker({
            position: {
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
            },
            map,
        }));

        infowindows.push(new maps.InfoWindow({
            content: getInfoWindowString(place),
        }));
    });

    markers.forEach((marker, i) => {
        marker.addListener('click', () => {
            infowindows[i].open(map, marker);
        });
    });
};


class MarkerInfoWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            places: [],
        };
    }

    componentDidMount() {
        // var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.592850,114.305542&radius=1500&type=hospital&keyword=cruise&key=AIzaSyB9spSr2pnx5bvTidoT9YCp2Dd7VpAH6Fw';

        // var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyB9spSr2pnx5bvTidoT9YCp2Dd7VpAH6Fw';
        // var =
        var url = 'Hospitals.json';
        var backendurl = 'allHospital.json';
        //get the name of the hospital with backend url, then fetch google maps api with url

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                data.results.forEach((result) => {
                    result.show = false; // eslint-disable-line no-param-reassign
                });
                this.setState({ places: data.results });
            });
    }

    static defaultProps = {
        center: {
            lat: 30.592850,
            lng: 114.305542
        },
        zoom: 11
    };

    renderMarker(map, maps, lat, lng) {
        let marker = new maps.Marker({
            position: { lat: lat, lng: lng},
            map,
            title: 'Hello World!'
        });
        return marker;
    }

    renderMarkers(map, maps, places) {
        let markers = [];
        let infowindows = [];

        let i = 0;
        places.forEach((place) => {
            var lat = place.geometry.location.lat;
            var lng = place.geometry.location.lng;
            markers.push(this.renderMarker(map, maps, lat, lng));
            infowindows.push( new maps.InfoWindow({
                content: getInfoWindowString(place),
            }))
        });

        markers.forEach((marker, i) => {
            marker.addListener('click', () => {
                infowindows[i].open(map, marker);
            });
        });
    }


    render() {
        const { places } = this.state;
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB9spSr2pnx5bvTidoT9YCp2Dd7VpAH6Fw' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps, places)}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default MarkerInfoWindow;