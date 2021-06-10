import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory }from'react-router';
import data from '../../db/db.json';
import './NewToilet.scss'



export function NewToilet (){
    
    let history = useHistory();
    //estados de forma para acceder a un valor de entrada utilizando un componente controlado
    let [name, setName] = useState("");
    let [pay, setPay] = useState("");
    let [accessibility, setAccessibility] = useState("");

    const [state, setState] = useState({
        latitude: 0,
        longitude: 0,
    });

    const onChange = async (e) => {
        setName(e.target.value);
        setPay(e.target.checked);
        setAccessibility(e.target.checked);

    }

    const handleSubmit = async(e) => {
        console.log(e);
        e.preventDefault();

        const response = await fetch('http://localhost:3000/venues', {
            method: 'POST', 
            body: JSON.stringify({
                name: {name},
                pay: {pay},
                accessibility: {accessibility},
                geometry: [state.latitude, state.longitude]
            })
        });
         
        /*if (response.status !== 200){
            throw new Error(`Request failed: ${response.status}`);
        }*/
        //fetch('http://localhost:3000/venues', response)
        console.log("data", response);
              
    }

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
        <form onSubmit={handleSubmit}>
            <div className="fatherNewToilet">
                <div className="cntNewToilet">
                    <div className="headerNewToilet">
                        <p className="ttlNT">New Toilet</p>
                    </div>
                    <div className="mainNewToilet">
                        <div className="cntDates">
                            <label className="nameNT">New Place</label>
                            <input className="impNT" type="text" placeholder="Name New Place"
                                name="name" value={name} onChange={onChange}/>
                        </div><br></br>
                        <div className="cntDates">
                            <label className="Coors">Coords</label>
                            <label name="venue" >Latitude: {state.latitude}</label>
                            <label name="venue" >Longitude: {state.longitude}</label>   
                        </div><br></br>
                        <div className="cntDates">
                            <label className="PblcOrCmrcl">Public or Comercial</label>
                            <input className="checkBoxPC" type="radio" name="pay" value="free" onChange={e => setPay(e.target.checked)}/><span>Free</span>
                            <input className="checkBoxPC" type="radio" name="pay" value="private" onChange={e => setPay(e.target.checked)}/><span>Private</span>
                        </div><br></br>
                        <div className="cntDates">
                            <label className="accessibility">Accessibility to Reduced Mobility</label>
                            <input className="checkBoxPC" type="radio" name="accessibility" value="accessible" onChange={e => setAccessibility(e.target.checked)}/><span>Accessible</span>
                            <input className="checkBoxPC" type="radio" name="accessibility" value="restricted" onChange={e => setAccessibility(e.target.checked)}/><span>Restricted</span>
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

            /*handlerPay(e) {
        let pay = ()  
    
    if (e.target.value == yes)

    }*/