/* global google */
import React, { Component } from 'react';
import locDetails from '../data/loc-details';
import { GoogleMap, Marker, Polyline, InfoWindow, HeatmapLayer} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -32.0,
  lng: 115.0
}

class WhereToVote extends Component {
  constructor() {
    super();
    this.state = {
      markers: locDetails.result.map((place) => {
        return {
          position: { lat: parseFloat(place.lat), lng: parseFloat(place.lng) },
          showInfo: false,
          infoContent: {
            name: place.VenueName,
            studentsCount: place.VenueType,
            routesCount: place.PhysicalAddress,
          },
        };
      }),
      coords: locDetails.result.map((place) => {
        return {
          lat: place.lat,
          lng: place.lng,
        };
      }),
      showMap: true,
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
    this.handleMarkerHover = this.handleMarkerHover.bind(this);
    this.handleMarkerHide = this.handleMarkerHide.bind(this);
  }

  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
            hover: false,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
            hover: false,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerHover(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            hover: true,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerHide(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            hover: false,
          };
        }
        return marker;
      }),
    });
  }

  minMaxLatAndLng(locDetails) {
    const listOfLat = locDetails.map((obj) => obj.lat);
    const listOfLng = locDetails.map((obj) => obj.lng);
    const lat = (Math.min(...listOfLat) + Math.max(...listOfLat)) / 2;
    const lng = (Math.min(...listOfLng) + Math.max(...listOfLng)) / 2;

    return { lat, lng };
  }

  onMapLoad = (map) => {
		// console.log('map.data: ', map.data)
		map.data.loadGeoJson('/StateElectoratesCurrentLGATE_069.simplified.geojson')

		map.data.addListener('click', function(event) {
			console.log(event.feature.getProperty('boundary_id')+" "+event.feature.getProperty('name'));
		});
  }
  
  render() {
    const mapCenter = this.minMaxLatAndLng(locDetails.result);

    return (
      <div>
        {this.state.showMap && (
          <div className="map">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={ center }
              zoom={7}
              onLoad={this.onMapLoad}
            >
              {this.state.markers.map((marker, index) => (
                <Marker
                  key={index}
                  position={marker.position}
                  onClick={() => this.handleMarkerClick(marker)}
                  onMouseOver={() => this.handleMarkerHover(marker)}
                  onMouseOut={() => this.handleMarkerHide(marker)}
                >
                  {marker.showInfo && (
                    <InfoWindow onCloseClick={() => this.handleMarkerClose(marker)}>
                      <div id="info-window">
                        <div>Type: {marker.infoContent.studentsCount}</div>
                        <div>Address: {marker.infoContent.routesCount}</div>
                      </div>
                    </InfoWindow>
                  )}

                  {marker.hover && (
                    <InfoWindow onCloseClick={() => this.handleMarkerClose(marker)}>
                      <div id="info-window">
                        <div>
                          Venue: <em>{marker.infoContent.name}</em>
                        </div>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              ))}
              <Polyline path={this.state.coords} />
              <HeatmapLayer
                // optional
                // onLoad={onLoad}
                // optional
                // onUnmount={onUnmount}
                // required
                data={[
                  new google.maps.LatLng(-31.939349, 115.966480),
                  ]}
              />
            </GoogleMap>
          </div>
        )}
      </div>
    );
  }
}

export default WhereToVote;
