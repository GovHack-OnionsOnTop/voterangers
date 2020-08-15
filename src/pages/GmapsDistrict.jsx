import React, { Component } from 'react';
import locDetails from '../data/loc-details';
import { GoogleMap, LoadScript, Marker, Polyline, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '800px'
};

class GmapsDistrict extends Component {
	constructor() {
		super();
		this.state = {
			markers: locDetails.result.map(place => {
				return {
					position: { lat: place.lat, lng: place.lng },
					showInfo: false,
					infoContent: {
						name: place.name,
						studentsCount: place.count,
						routesCount: place.routes_count 
					}
				}
			}),    
			coords: locDetails.result.map(place => {
				return {
					lat: place.lat, 
					lng: place.lng
				}
			}),
			showMap: true
		};

		this.handleMarkerClick = this.handleMarkerClick.bind(this);
		this.handleMarkerClose = this.handleMarkerClose.bind(this);
		this.handleMarkerHover = this.handleMarkerHover.bind(this);
		this.handleMarkerHide = this.handleMarkerHide.bind(this);
	}
	
	handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
						hover: false
          };
        }
        return marker;
      }),
    });
  }

	handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
						hover: false
          };
        }
        return marker;
      }),
    });
  }

	handleMarkerHover(targetMarker) {
		this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            hover: true
          };
        }
        return marker;
      }),
    });
	}

	handleMarkerHide(targetMarker) {
		this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            hover: false
          };
        }
        return marker;
      }),
    });
	}

	minMaxLatAndLng(locDetails) {
		const listOfLat = locDetails.map(obj => obj.lat);
		const listOfLng = locDetails.map(obj => obj.lng);
		const lat = (Math.min(...listOfLat) + Math.max(...listOfLat)) / 2;
		const lng = (Math.min(...listOfLng) + Math.max(...listOfLng)) / 2;
	
		return {lat, lng}	
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
			<LoadScript
			  googleMapsApiKey="AIzaSyAR6PhdQK_gv4C2aTeHCaADwCsyn_wWKI8"
			>
			  <GoogleMap
				mapContainerStyle={containerStyle}
				center={mapCenter}
				zoom={6}
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
									<div>ABC: {marker.infoContent.studentsCount}</div>
									<div>XYZ: {marker.infoContent.routesCount}</div>
								</div>
							</InfoWindow>
						)}

						{marker.hover && (
							<InfoWindow
								onCloseClick={() => this.handleMarkerClose(marker)}>
								<div id="info-window">
									<div>XYZ: <em>{marker.infoContent.name}</em></div>
								</div>
							</InfoWindow>
						)}
					</Marker>
				))}
				<Polyline
					path={this.state.coords}
				/>
			  </GoogleMap>
			</LoadScript>
		  );
	}
}

export default GmapsDistrict;