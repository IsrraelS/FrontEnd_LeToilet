import React from 'react';
import Maps from '../../components/maps/Maps.js'
import './CntMaps.scss';


export function CntMaps() {
   

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
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>
    )
   
}