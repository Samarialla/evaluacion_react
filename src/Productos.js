import React, { useState, useEffect } from "react";
import NumberFormat from 'react-number-format';
const Productos = (props) => {
    useEffect(() => {
        totalproducto();
    }, []);

    const [totalprod, settotal] = useState(0)
    const totalproducto = () => {
        var total = 0;
        props.itemcarro.map((item) => {
            total = total + (item.productoagregado * item.precio);
        })
        settotal(total);
        return true
        
    }

    return (
        <div className="container-fluid">
            <div className="row card-body">
                <div className="row card col-sm-12">
                    <div className="row title">
                        <h3><strong> Carrito de Compras</strong></h3>
                    </div>
                    <hr className="my-4"></hr>
                    {props.itemcarro.map(item => (
                        <React.Fragment key={item.producto}>
                            <div className="row card-body">
                                <div className="col-sm-7 productosSel">
                                    <div className="row">
                                        <div className="col-sm-3">

                                            <img src={item.url} className="img-thumbnail imgProd" />
                                        </div>
                                        <div className="col-sm-9 descripcion">
                                            <h2> <label className="nombreProd"><b><span></span></b></label></h2>

                                            <label className="cantidadProd"><b>Unidades:</b> <span> {item.productoagregado}
                                            </span></label>
                                            <br></br>
                                            <label className="precioProd"><b>Precio Unidad:  </b><NumberFormat value={item.precio} displayType={'text'} thousandSeparator={true} prefix={'$'} /></label>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="subtotal"><b>Subtotal: </b><NumberFormat value={item.productoagregado * item.precio} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                        </label>

                                    </div>
                                    <hr className="my-4"></hr>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                    <div className="row btn-group">
                        <div className="col-sm-5 descripcion">
                            <div className="row">
                                <div className="col-sm-12 containertotal">
                                    <div className="row totalLabel">
                                        <br></br>
                                        <label className="total">
                                            <h1>Total: <span><NumberFormat value={totalprod} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></h1>
                                        </label>
                                        <br></br>
                                    </div>
                                    <div className="row btn-group">
                                        <button type="button" className="btn btn-success btn-sm" >Pagar</button>
                                    </div>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productos;