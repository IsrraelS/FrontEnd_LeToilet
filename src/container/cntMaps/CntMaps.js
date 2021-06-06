import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MapView from '../../components/mapview/MapView'
import './CntMaps.scss';

export const CntMaps = ()=> {
    const [state, setState] = useState({
        latitude: 0,
        longitude: 0
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            function(error) {
                console.log(error)
            },
            {
                enableHighAccuracy: true
            }
        );
    });
    return(
        <div className="cntMaps">
            <div className="boxMaps">
                <div className="headerMps">
                    <div className="boxTitle">
                        <p>Toilets in Maps</p>
                    </div>
                </div>
                <div className="mainMps">
                    <MapView></MapView>
                </div>
                <div className="footerMps">
                    <h5>Geolocation</h5>
                    <p>Latitude: {state.latitude}</p>
                    <p>Longitude: {state.longitude}</p>
                    <Link to={{
                        pathname: '/map',
                        state 
                    }}>see my location</Link>
                </div>
            </div>
        </div>
    )
}

    /*componentDidMount() {
        fetch('http://localhost:3000/markers')
            .then((response) => response.json())
            .then(markersList => {
            this.setState({ markers: "markersList" });
            
        });
        console.log(this.state.markers);
    }*/   

    /*componentDidMount() {
        fetchMarkers()
    }
    //console.log(this.state.markers);
    const fetchMarkers = () => {
    fetch('http://localhost:3000/markers')
        .then((response) => response.json())
        .then(markersList => {
        this.setState({ markers: markersList });
        })
    }*/