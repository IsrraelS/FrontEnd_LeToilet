import React from "react";
import './Home.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from '../../components/carousel/Carousel'

export function Home(){

    return(
        <div className="main">
            <div className="cntMain">
                <div className="boxMain">
                    <div className="centralMain">
                        <div className="carouselHome">
                            <Carousel></Carousel>
                        </div>
                        <div className="cntText">
                            <p>"Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}