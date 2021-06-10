import React, { useState, useEffect } from 'react';
import {Map, TileLayer} from 'react-leaflet';
import Markers from '../markers/VenueMarkers';
import data from '../../db/db.json';
import {useLocation, useHistory} from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

const MapView = () => {

    //en principio usamos el useState para definir el estado inicial del mapa

    const [state, setState] = useState({
        currentLocation: {lat:' 40.4167', lng:'-3.70325'},
        zoom: 13,
        data: null,
    });

    const location = useLocation();
    const history = useHistory()

    useEffect(() => {    
        fetch('http://localhost:3000/venues')
            .then(response => response.json())
            .then(venues => {
            setState({ data: venues})
        })
        console.log('marcadores', data.venues);
    },[]);
    
    /*\useEffect(() => {
        if(location.state.latitude && location.state.longitude) {
            const currentLocation = {
                lat: location.state.latitude,
                lng: location.state.longitude
            };
            console.log(state);
            setState({
                ...state, 
                data: {
                    venues: state.data.venues.concat({
                        name:"new",
                        geometry:[currentLocation.lat, currentLocation.lng],
                    }),
                   },
                   currentLocation,
                });
            history.replace({
                pathname: './map', 
                state: {}
            });
          }
    }, [location]);*/

    if(!state.data){
        return <div>Loading...</div>
    }

    return (
        //componete Map posiciona el punto de vista primera en el mapa y su proximidad
        <Map 
            center={state.currentLocation}
            zoom={state.zoom}                
        >
            {/* el title player es el mapa que se muestra*/}
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            >
            </TileLayer>
            {/* Los marcadores que se muestran vendran de una api Fake por ahora de un archivo data.json */}
            {state.data.venues && 
           
            <Markers
                venues={state.data.venues}//recibe el marker y es capas de generar marcadores
            >
            </Markers>
            }     
        </Map>
    );
};

export default MapView;