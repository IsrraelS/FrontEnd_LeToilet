import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";

export function Header(){

    return(
        <div className="header">
            <div className="cntHeader">
                <div className="boxHeader">
                    <div className="cntNavbar">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="./">
                                    <div className="boxIcon">
                                        <img className="icon" ></img>
                                    </div>
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/search">Search</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/newToilet">New Toilet</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Filter
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><Link className="dropdown-item" to="/search" onClick={() => ("Accesibilidad Movilidad Reducida")}>Accesibilidad Movilidad Reducida</Link></li>
                                                <li><Link className="dropdown-item" to="/search" onClick={() => ("Con Cambiadores para ninos")}>Con Cambiadores para Niños</Link></li>
                                                <li><Link className="dropdown-item" to="/search" onClick={() => ("Pagos")}>Pagos</Link></li>
                                                <li><Link className="dropdown-item" to="/search" onClick={() => ("Gratis")}>Gratis</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}