import React, { useState} from "react";
const Productos = (props) => {
    const [addproductos, setAddproductos] = useState();
    const itemProductos = () => {
    console.log(props.itemcarro)
        for(var i = 0; i<props.itemcarro;i++ ){
            setAddproductos(props.itemcarro[i]);
            console.log({addproductos})
        }   
    }
  
    return (
        <React.Fragment>        
            <div className="container-fluid">
                <div className="row card-body">
                    <div className="row card col-sm-12">
                        <div className="row title">
                            <h3><strong> Carrito de Compras</strong></h3>
                        </div>
                        <hr className="my-4"></hr>
                        <div className="row card-body">
                            <div className="col-sm-7 productosSel">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src={props.itemcarro.url} className="img-thumbnail imgProd" />
                                    </div>
                                    <div className="col-sm-9 descripcion">
                                        <h2> <label className="nombreProd"><b><span></span></b></label></h2>

                                        <label className="cantidadProd"><b>Unidades:{props.itemcarro.cantidad} </b>
                                            <span></span></label>
                                        <br></br>
                                        <label className="precioProd"><b>Precio Unidad: $</b>{props.itemcarro.precio} </label>

                                    </div>
                                </div>
                                <div className="row">
                                    <label className="subtotal"><b>Subtotal: $</b><span></span></label>

                                </div>
                                <hr className="my-4"></hr>
                            </div>
                        </div>

                        <div className="row btn-group">
                            <div className="col-sm-5 descripcion">
                                <div className="row">
                                    <div className="col-sm-12 containertotal">
                                        <div className="row totalLabel">
                                            <br></br>
                                            <label className="total">
                                                <h1>Total: $<span></span></h1>
                                            </label>
                                            <br></br>
                                        </div>
                                        <div className="row btn-group">
                                            <button type="button" className="btn btn-success btn-sm" onClick={itemProductos}>Pagar</button>
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
        </React.Fragment>
    );
};

export default Productos;