import React from "react";
import app from "./base";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons";


const Nav = () => {
    return (
        <>
            <nav id='nav' class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">La Bodega</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <span class="sr-only">
                            </span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                            
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                    </ul>
                    
                   <a class="navbar-toggler-icon"> <FontAwesomeIcon icon={faHome} /></a>
                   <a class="navbar-toggler-icon"> <FontAwesomeIcon icon={faCoffee} /></a>
                   <FontAwesomeIcon icon={['fab', 'apple']} />
                    
                </div>
            </nav>
        </>
    );
};

export default Nav;