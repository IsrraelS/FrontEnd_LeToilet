import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss'

export function Footer(){

    return(       
        <div className="footer"> 
            <div className="cntFooter">
                <div className="boxFooter">
                    <div className="boxIcons">
                        <div className="icon1"><Link to="" ><i className="fab fa-twitter fa-2x"></i></Link></div>
                        <div className="icon1"><Link to="" ><i className="fab fa-instagram fa-2x"></i></Link></div>
                        <div className="icon1"><Link to="" ><i className="fab fa-facebook fa-2x"></i></Link></div>
                    </div>
                    <div className="boxDR">
                        <h5 className="h4">Contacts</h5>
                        <p className="reserved">Madrid - Spain</p>
                        <p className="reserved">Create by Isrrael Sanchez</p>
                        <p className="reserved">All Services Reserved</p>
                    </div>
                </div>
            </div>
        </div>
         
    )
}