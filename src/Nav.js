import React, { useState } from "react";
import app from './base'
import ReactTooltip from 'react-tooltip'
const onCantidad = (producto, event) => {
    //event.preventDefault();
     this.props.handleAddItem(producto, event);
     console.log((producto, event))
     return
}
const Nav = (props) => {
    return (
        <>
            <nav id='nav' className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">La Bodega</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <span className="sr-only">
                            </span>
                        </li>
                        <li className="nav-item">
                            <a></a>                           
                        </li>
                        <li>
                            <a></a>
                        </li>
                    </ul>   
                    <a><i className="fa fa-server" aria-hidden="true"></i></a>
                    <a className="quick-btn" href="#">
                                <i className="fa fa-cart-arrow-down notificacion"></i><br/>
                                <span className="label label-success" >{props.cantidadEnCarrito}</span>
                            </a>
                    <a><i className="fa fa-shopping-bag" aria-hidden="true" ></i></a>
                    <a onClick={() => app.auth().signOut()} data-tip="Salir de Sistema"><i className="fa fa-sign-in" aria-hidden="true"></i></a>
                    <ReactTooltip />      
                </div>
            </nav>
        </>
    );
};

export default Nav;