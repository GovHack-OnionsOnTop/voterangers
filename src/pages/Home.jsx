/* global google */
import _ from 'lodash';
import React, { Component } from "react";
import locDetails from "../data/loc-details";
import {
  GoogleMap,
  Marker,
  Polyline,
  InfoWindow,
  HeatmapLayer,
  StandaloneSearchBox,
  Autocomplete,
} from "@react-google-maps/api";
import candidates from "../data/candidates.js";
import CandidateCard from "../components/CandidateCard.jsx";
import ElectoralSummaryBlock from "../components/ElectoralSummaryBlock.jsx";
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
      showOPP: true,
      showMPP: true,
      map: null,
      area: "area1",
      elecSummary: null,
    };

    this.onMapLoad = this.onMapLoad.bind(this);

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
    this.handleMarkerHover = this.handleMarkerHover.bind(this);
    this.handleMarkerHide = this.handleMarkerHide.bind(this);

    this.handleShowHideDistricts = this.handleShowHideDistricts.bind(this);
    this.handleShowHidePrecincts = this.handleShowHidePrecincts.bind(this);
    this.handleShowHideCOVIDHotspots = this.handleShowHideCOVIDHotspots.bind(
      this
    );
    this.handleShowHideOPP = this.handleShowHideOPP.bind(this);
    this.handleShowHideMPP = this.handleShowHideMPP.bind(this);

    this.onSearchBarLoad = this.onSearchBarLoad.bind(this);
    this.onPlacesChanged = this.onPlacesChanged.bind(this);

    this.onDistrictClickHandler = this.onDistrictClickHandler.bind(this);
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

  handleShowHideOPP() {
    var newState = !this.state.showOPP;
    this.setState({
      showOPP: newState,
    });
    console.log("Show Ordinary Voting Place?", newState);
  }

  handleShowHideMPP() {
    var newState = !this.state.showMPP;
    this.setState({
      showMPP: newState,
    });
    console.log("Show Mobile Voting Place?", newState);
  }

  minMaxLatAndLng(locDetails) {
    const listOfLat = locDetails.map((obj) => obj.lat);
    const listOfLng = locDetails.map((obj) => obj.lng);
    const lat = (Math.min(...listOfLat) + Math.max(...listOfLat)) / 2;
    const lng = (Math.min(...listOfLng) + Math.max(...listOfLng)) / 2;

    return { lat, lng };
  }

  onDistrictClickHandler(event) {
    var buf = event.feature.getProperty("name").split(',')
    const distKey = buf[0].trim().toLowerCase();
    const elecSumBuf = elecSummary[distKey];
    console.log(distKey, elecSumBuf);


    // const boundary = event.feature.getProperty("boundary_id") % 2;
    // const areaName = boundary === 0 ? "area1" : "area2";
    const areaName = (this.state.area === "area1") ? "area2" : "area1";

    console.log("WhereToVote -> onMapLoad -> areaName", areaName); 
    this.setState({ 
      area: areaName,
      distKey: distKey,
      });
    console.log(this.state.area);
    console.log(
      event.feature.getProperty("boundary_id") +
        " " +
        event.feature.getProperty("name")
    );
  }

  onMapLoad = (map) => {
    // console.log('map.data: ', map.data)
    map.data.loadGeoJson(
      "/StateElectoratesCurrentLGATE_069.simplified.geojson"
    );

    map.data.addListener("click", this.onDistrictClickHandler);
    map.data.addListener('mouseover', function(event) {
      map.data.revertStyle();
      map.data.overrideStyle(event.feature, {strokeWeight: 6});
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
      <div style={{ marginTop: 100 }}>
        <h3>Coming Elections</h3>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              22 August 2020 Northern Territory Election
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">27 July, 2020</h6>
            <p className="card-text">
              The Western Australian Electoral Commission will conduct early
              voting at Level 2, 111 St Georges Terrace for the NT Election.
              Electors can vote from 8:30am to 4:30pm on business days from
              Monday 10 August to Thursday 20 August and from 8:30am to 4:00pm
              on Friday 21 August 2020 inclusive.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        {this.state.showMap && (
          <>
            <h3>PollingBooth & Electoral Boundaries</h3>
            <div className="home-map">
              <button
                className="btn-hide-Districts"
                onClick={this.handleShowHideDistricts}
              >
                {" "}
                {!this.state.showDistrict ? "Show" : "Hide"} Districts{" "}
              </button>
              {/* 
              <button
                className="btn-hide-Precincts"
                onClick={this.handleShowHidePrecincts}
              >
                {" "}
                {!this.state.showPrecinct ? "Show" : "Hide"} Polling Place {" "}
              </button>
              */}
              <button
                className="btn-hide-OPP"
                onClick={this.handleShowHideOPP}
              >
                {" "}
                {!this.state.showOPP ? "Show" : "Hide"} Ordinary Polling Place {" "}
              </button>
              <button
                className="btn-hide-MPP"
                onClick={this.handleShowHideMPP}
              >
                {" "}
                {!this.state.showMPP ? "Show" : "Hide"} Mobile Polling Place {" "}
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
                {this.state.showPrecinct && this.state.showOPP && _.filter(this.state.markers,
                  (x) => x.infoContent.studentsCount == "Ordinary Polling Place")
                  .map((marker, index) => (
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
                  {this.state.showPrecinct && this.state.showMPP && _.filter(this.state.markers,
                  (x) => x.infoContent.studentsCount == "Mobile Polling Place")
                  .map((marker, index) => (
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
              <div class="album py-4">
                { this.state.distKey && (
                  <div class="row">
                    <ElectoralSummaryBlock data={ elecSummary[this.state.distKey] }></ElectoralSummaryBlock>
                  </div>
                )}
              </div>
              <div class="album py-4">
                <h3> Your Candidates </h3>
                <div class="container">
                  <div class="row">
                    {candidates[this.state.area].map((candidate) => (
                      <CandidateCard candidate={candidate}></CandidateCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default WhereToVote;
