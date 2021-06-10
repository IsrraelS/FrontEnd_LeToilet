import React from 'react'
import { Marker } from 'react-leaflet'
import { VenueIconWC } from '../iconwc/VenueIconWC'
import { MarkerPopUp } from '../markerpopup/MarkerPopUp'


const VenueMarkers = (props) => {
    //desde props se quiere extraer los sanitarios en coordenadas ("places")
    //desde places se utiliza un metodo map y por cada elemento que recorra retorna un marker
    // el metodo map devuelve un nuevo array de markers
    const {venues} = props;

    console.log('venues', venues);

    const markers = venues.map((venue, i) =>(
        <Marker
        // key por que se estan generando diferentes marcadores entonces utilizamos un id unico
        //de geometry recibo las un array con las coordenadas de latitud y longitud
        //icono
            key={i}
            position={venue.geometry}
            icon={VenueIconWC}
        >
            <MarkerPopUp data={venue}></MarkerPopUp>
        </Marker>
        
    ));
    
    return <>{markers}</>;
}

export default VenueMarkers;
