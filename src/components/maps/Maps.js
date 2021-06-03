import React, { Component } from 'react';
//import  GoogleMaps from 'simple-react-google-maps';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
//import CurrentLocation from '../../map/map';

const mapStyles = {
  width: '39.9em',
  height: '19.9em'
};

/*class Maps extends Component {
    
    render(){

        return(
            <div className="map">
                <GoogleMaps
                apiKey={"AIzaSyDtwqqAT436HDAnMtsO65OyYWibfCdJ4YM"}
                    style={{ height: "19.9em", width: "39.9em" }}
                    zoom={12}
                    center={{
                        lat:40.4127355,
                        lng:-3.695428
                    }}
                />
                <button></button>
            </div>
        );
    }
   //}
}
export default Maps;*/

export class Maps extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

   render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat:40.4127355,
            lng:-3.695428
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDtwqqAT436HDAnMtsO65OyYWibfCdJ4YM'
})(Maps);


