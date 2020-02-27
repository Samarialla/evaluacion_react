import React from "react";
import app from './base'
import ReactTooltip from 'react-tooltip'


const Nav = (props) => {
    const ProductosMostrar = () => {
       props.mostrar('')
    }
    const mostrarMenu = ()=>{
        props.mostrarMenulista('')
    }

    return (
        <>
            <nav id='nav' className="navbar navbar-expand-lg navbar-light bg-light">
                <a onClick={mostrarMenu} className="navbar-brand">La Bodega</a>
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
                    <a><i className="fa fa-server" aria-hidden="true" ></i></a>
                    <a onClick={ProductosMostrar} className="quick-btn">
                        <i className="fa fa-cart-arrow-down notificacion"></i><br />
                        <span className="label label-success" >{props.cantidadEnCarrito}</span> </a>

                    <a><i className="fa fa-shopping-bag" aria-hidden="true" ></i></a>
                    <a onClick={() => app.auth().signOut()} data-tip="Salir de Sistema"><i className="fa fa-sign-in" aria-hidden="true"></i></a>
                    <ReactTooltip />
                </div>

            </nav>

        </>
    );
};

export default Nav;