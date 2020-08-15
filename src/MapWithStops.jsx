
import React, { Component } from 'react';
import locDetails from './data/loc-details';
import { withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow } from "react-google-maps";

const InitialMap = withGoogleMap(props => {
	return (
		<GoogleMap
			defaultZoom={6}
			defaultCenter={props.center}
			defaultOptions={{
				scrollwheel: false,
				mapTypeControl: false,
      	draggable: true,
      	scaleControl: false,
				mapTypeId: 'roadmap'
			}}
			
		>

			{props.markers.map((marker, index) => (
				<Marker
					key={index}
					position={marker.position}
					onClick={() => props.onMarkerClick(marker)}
					onMouseOver={() => props.onMarkerHover(marker)}
					onMouseOut={() => props.onMarkerHide(marker)}
				>
					{marker.showInfo && (
						<InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
							<div id="info-window">
								<div>ABC: {marker.infoContent.studentsCount}</div>
								<div>XYZ: {marker.infoContent.routesCount}</div>
							</div>
						</InfoWindow>
					)}

					{marker.hover && (
						<InfoWindow
							onCloseClick={() => props.onMarkerClose(marker)}>
							<div id="info-window">
								<div>XYZ: <em>{marker.infoContent.name}</em></div>
							</div>
						</InfoWindow>
					)}
				</Marker>
			))}
			<Polyline
				path={props.coords}
			/>
		</GoogleMap>
	)
});

class MapWithStops extends Component {
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
	
	render() {
		const mapCenter = this.minMaxLatAndLng(locDetails.result);

		return (
			<div>
				{this.state.showMap &&
					<div className="map">
						<InitialMap
							containerElement={
								<div style={{ height: `100%` }} />
							}
							mapElement={
								<div style={{ height: `100%` }} />
							}
							center={mapCenter}
							markers={this.state.markers}
							coords={this.state.coords}
							onMarkerClick={this.handleMarkerClick}
							onMarkerClose={this.handleMarkerClose}
							onMarkerHover={this.handleMarkerHover}
							onMarkerHide={this.handleMarkerHide}
						/>
					</div>
				}
			</div>	
		);
	}
}

export default MapWithStops;