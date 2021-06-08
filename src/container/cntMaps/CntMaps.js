import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MapView from '../../components/mapview/MapView'
import './CntMaps.scss';

export const CntMaps = ()=> {
    
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
                    <h5>Register New Toilet</h5>
                    <Link to={{
                        pathname: '/NewToilet',
                    }}>New Toilet</Link>
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