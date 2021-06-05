import React from 'react';
import Maps from '../../components/maps/Maps.js'
import './CntMaps.scss';

export class CntMaps extends React.Component {

    render(){
        return(
            <div className="cntMaps">
                <div className="boxMaps">
                    <div className="headerMps">
                        <div className="boxTitle">
                            <p>Toilets in Maps</p>
                        </div>
                    </div>
                    <div className="mainMps">
                        <Maps></Maps>
                    </div>
                    <div className="footerMps">
                    
                    </div>
                </div>
            </div>
        )
    }
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