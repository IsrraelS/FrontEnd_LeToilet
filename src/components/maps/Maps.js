import React, { Component } from 'react';
import  GoogleMaps from 'simple-react-google-maps';

class Maps extends Component {
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
                    markers={[
                        {lat:40.409711, lng: -3.692569},
                        {lat:40.412072, lng: -3.692569},
                        {lat:40.451824, lng: -3.692569}
                    ]}
                />
            </div>
        );
    }

}
export default Maps;

