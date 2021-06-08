import React from 'react';
import './NewToilet.scss'

export function NewToilet (){

    return(
        <form>
            <div className="fatherNewToilet">
                <div className="cntNewToilet">
                    <div className="headerNewToilet">
                        <p className="ttlNT">New Toilet</p>
                    </div>
                    <div className="mainNewToilet">
                        <div className="cntDates">
                            <label className="nameNT">New Place</label>
                            <input className="impNT" type="text" placeholder="Name New Place"
                                name="nameNewPlace"></input>
                        </div><br></br>
                        <div className="cntDates">
                            <label className="Coors">Coords</label>
                            <input className="impLtt" type="text" placeholder="Latitude" 
                                name="Latitude"></input><br></br>
                            <input className="impLng" type="text" placeholder="Longitude" 
                                name="Longitude"></input>    
                        </div><br></br>
                        <form className="cntDates">
                            <label className="PblcOrCmrcl">Public or Comercial</label>
                            <input className="checkBoxPC" type="radio"  name="option1" value="public"></input>
                            <label for="option1">Public</label>
                            <input className="checkBoxPC" type="radio"  name="option1" value="comercial"></input>
                            <label for="option2">Comercial</label>
                        </form><br></br>
                        <form className="cntDates">
                            <label className="accessibility">Accessibility to Reduced Mobility</label>
                            <input className="checkBoxPC" type="radio"  name="option2" value="Yes"></input>
                            <label for="option1">Yes</label>
                            <input className="checkBoxPC" type="radio"  name="option2" value="No"></input>
                            <label for="option2">No</label>
                        </form><br></br>
                    </div>
                    <div className="footerRgtr">
                        <div className="cntBtnRG">
                            <button className="btnRgtr" type='Submit'>Register</button>
                        </div>
                        <div className="txtRgtr">
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}