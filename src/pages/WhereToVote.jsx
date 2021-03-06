/* global google */
import React, { Component } from "react";
import locDetails from "../data/loc-details";
import {
  GoogleMap,
  Marker,
  Polyline,
  InfoWindow,
  HeatmapLayer,
  Autocomplete,
} from "@react-google-maps/api";
import candidates from "../data/candidates.js";
import CandidateCard from "../components/CandidateCard.jsx";
import elecSummary from '../data/electoral-summary';


const containerStyle = {
  width: "100%",
  height: "70%",
};

const center = {
  lat: -32.0,
  lng: 115.0,
};

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
      showDistrict: true,
      showPrecinct: true,
      showCovidSpot: true,
      map: null,
      state: "area1",
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
    this.handleMarkerHover = this.handleMarkerHover.bind(this);
    this.handleMarkerHide = this.handleMarkerHide.bind(this);

    this.handleShowHideDistricts = this.handleShowHideDistricts.bind(this);
    this.handleShowHidePrecincts = this.handleShowHidePrecincts.bind(this);
    this.handleShowHideCOVIDHotspots = this.handleShowHideCOVIDHotspots.bind(
      this
    );

    this.onSearchBarLoad = this.onSearchBarLoad.bind(this);
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
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

  handleShowHideDistricts() {
    var newState = !this.state.showDistrict;
    this.setState({
      showDistrict: newState,
    });
    this.state.map.data.setStyle({ visible: newState });
    console.log("Show Districts?", newState);
  }

  handleShowHidePrecincts() {
    var newState = !this.state.showPrecinct;
    this.setState({
      showPrecinct: newState,
    });
    console.log("Show Precinct?", newState);
  }

  handleShowHideCOVIDHotspots() {
    var newState = !this.state.showCovidSpot;
    this.setState({
      showCovidSpot: newState,
    });
    console.log("Show COVID Hotspot?", newState);
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
    map.data.loadGeoJson(
      "/StateElectoratesCurrentLGATE_069.simplified.geojson"
    );

    map.data.addListener("click", function (event) {
      var buf = event.feature.getProperty("name").split(',')
      var distKey = buf[0].trim().toLowerCase();
      console.log(distKey, elecSummary[distKey]);
      
      const boundary = event.feature.getProperty("boundary_id") % 2;
      const areaName = boundary === 0 ? "area1" : "area2";
      this.setState = { area: areaName };
      console.log(
        event.feature.getProperty("boundary_id") +
          " " +
          event.feature.getProperty("name")
      );
    });

    map.data.setStyle({ visible: this.state.showDistrict });

    this.setState({
      map: map,
    });
  };

  onSearchBarLoad(ref) {
    this.searchBox = ref;
    this.searchBox.setComponentRestrictions({ country: ["au"] });
  }

  onPlacesChanged() {
    var results = this.searchBox.getPlace();
    // console.log(results);
    this.state.map.setCenter(results.geometry.location);
    this.state.map.setZoom(10);
  }

  render() {
    const mapCenter = this.minMaxLatAndLng(locDetails.result);

    return (
      <div>
        {this.state.showMap && (
          <div className="map">
            <button
              className="btn-hide-Districts"
              onClick={this.handleShowHideDistricts}
            >
              {" "}
              {!this.state.showDistrict ? "Show" : "Hide"} Districts{" "}
            </button>
            <button
              className="btn-hide-Precincts"
              onClick={this.handleShowHidePrecincts}
            >
              {" "}
              {!this.state.showPrecinct ? "Show" : "Hide"} Precincts{" "}
            </button>
            <button
              className="btn-hide-Hotspot"
              onClick={this.handleShowHideCOVIDHotspots}
            >
              {" "}
              {!this.state.showCovidSpot ? "Show" : "Hide"} COVID Hotspot{" "}
            </button>

            <div className="nav">
              <Autocomplete
                onLoad={this.onSearchBarLoad}
                onPlaceChanged={this.onPlacesChanged}
              >
                <input type="text" placeholder="Enter your location" />
              </Autocomplete>
            </div>

            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={7}
              onLoad={this.onMapLoad}
            >
              {this.state.showPrecinct &&
                this.state.markers.map((marker, index) => (
                  <Marker
                    key={index}
                    position={marker.position}
                    onClick={() => this.handleMarkerClick(marker)}
                    onMouseOver={() => this.handleMarkerHover(marker)}
                    onMouseOut={() => this.handleMarkerHide(marker)}
                  >
                    {marker.showInfo && (
                      <InfoWindow
                        onCloseClick={() => this.handleMarkerClose(marker)}
                      >
                        <div id="info-window">
                          <div>Type: {marker.infoContent.studentsCount}</div>
                          <div>Address: {marker.infoContent.routesCount}</div>
                        </div>
                      </InfoWindow>
                    )}

                    {marker.hover && (
                      <InfoWindow
                        onCloseClick={() => this.handleMarkerClose(marker)}
                      >
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
              {this.state.showCovidSpot && (
                <HeatmapLayer
                  // optional
                  // onLoad={onLoad}
                  // optional
                  // onUnmount={onUnmount}
                  // required
                  data={[new google.maps.LatLng(-31.939349, 115.96648)]}
                />
              )}
            </GoogleMap>
              <div class="container">
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default WhereToVote;
