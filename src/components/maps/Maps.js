import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
//import CurrentLocation from '../../map/map';


const mapStyles = {
  width: '39.9em',
  height: '19.9em'
};

export class Maps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {},  
      markers: null, 
      show:false
    };
  }
    
    componentDidMount() {
        this.fetchMarkers()
    }

    async fetchMarkers () {

        let res = await fetch('http://localhost:3000/markers');
        res = await res.json();
        this.setState({ markers: res });
        console.log(this.state.markers);
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
        markers={this.state.fetchMarkers}
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
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDtwqqAT436HDAnMtsO65OyYWibfCdJ4YM'
})(Maps);

/*{this.state.show && this.fetchMarkers.length > 0 && 
                  <>
                      {this.state.fetchMarkers.map((fetchMarkers) => (
                          <p key={fetchMarkers.id}>{fetchMarkers}</p>  
                      ))}
                  </>
              }
<button onClick={()=>{this.fetchMarkers && this.setState({ show:true })}}>ver</button>*/
