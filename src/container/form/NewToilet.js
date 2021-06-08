import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory }from'react-router';
import data from '../../db/db.json';
import './NewToilet.scss'



export function NewToilet (){
    
    let history = useHistory();

    let [name, setName] = useState("");
    let [pay, setPay] = useState("");
    let [accessibility, setAccessibility] = useState("");

    const [state, setState] = useState({
        latitude: 0,
        longitude: 0,
    });


    const handleSubmit = async(e) => {
        console.log(e);
        e.preventDefault();
        data.venues.push({
            name: "string",
            id: "string",
            geometry: []
        
        })
        //let respuesta = await data.venues(name, pay, accessibility);
        //if (respuesta) history.push('/map');
         /*setState({
            ...state, 
            data: {
                venues: state.data.venues.concat({
                    name:"new",
                    pay:"pay",
                    accessibility:"",
                }),
                },
            });
        */
        console.log("history", data);        
    }

    /*handlerPay(e) {
        let pay = ()  
    
    if (e.target.value == yes)

    }*/

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
        <form
            onSubmit={handleSubmit}>
            <div className="fatherNewToilet">
                <div className="cntNewToilet">
                    <div className="headerNewToilet">
                        <p className="ttlNT">New Toilet</p>
                    </div>
                    <div className="mainNewToilet">
                        <div className="cntDates">
                            <label className="nameNT">New Place</label>
                            <input className="impNT" type="text" placeholder="Name New Place"
                                name="name"/>
                        </div><br></br>
                        <div className="cntDates">
                            <label className="Coors">Coords</label>
                            <label name="venue">Latitude: {state.latitude}</label>
                            <label name="venue">Longitude: {state.longitude}</label>   
                        </div><br></br>
                        <div className="cntDates">
                            <label className="PblcOrCmrcl">Public or Comercial</label>
                            <input className="checkBoxPC" type="radio" name="pay" value="Free"/><span>Free</span>
                            <input className="checkBoxPC" type="radio" name="pay" value="Private"/><span>Private</span>
                        </div><br></br>
                        <div className="cntDates">
                            <label className="accessibility">Accessibility to Reduced Mobility</label>
                            <input className="checkBoxPC" type="radio" name="accessibility" value="Yes"/><span>Yes</span>
                            <input className="checkBoxPC" type="radio" name="accesibility" value="No"/><span>No</span>
                        </div><br></br>
                    </div>
                    <div className="footerRgtr">
                        <div className="cntBtnRG">
                            <button className="btn" type="submit">
                                Register Toilet
                            </button>
                        </div>
                        <div className="txtRgtr">
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

/*
onChange={e => setPay(event.target.checked)}
onChange={e => setPay(event.target.checked)}

onChange={e => setAccessibility(event.target.checked)}*/