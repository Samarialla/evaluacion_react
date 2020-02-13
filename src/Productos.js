import React, { useState, useEffect } from "react";
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Productos = () => {

    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className="row card-body">
                    <h1> Ajo</h1>
                    <hr className="my-4"></hr>
                    <div className="row card col-sm-12">
                        <div className="row">
                            <div className="card-image col-sm-6">
                                <img src="imagenesBase/ajo.jpg" className="img-thumbnail imgProdu" />
                                <br></br>
                                <div className="col-sm-6 descripcion">
                                    <br></br>
                                    <label className="precioProd"><b>Precio:</b> $<span></span></label>
                                    <br></br>
                                    <label className="cantidadProd"><b>Unidades disponibles: </b> <span></span></label>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row btn-group">
                    <Link to="/" className="btn btn-info" type="" id=""   value="Ver Más" >Volver</Link>
                </div>
            </div>
        </>
    );
};

export default Productos;