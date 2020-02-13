import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Lista() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [set, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [title, setTitle] = useState('');

    const fetchItems = async () => {
        const data = await fetch(
            "https://tarea-add74.firebaseio.com/bodega/.json"
        );

        const set = await data.json();
        setItems(set);
        console.log(set)
    };

    const onchange = e => {
        setSearch(e.target.value);
    };

    const filter = set.filter(res => {
        return (
            res.producto.toLowerCase().indexOf(search.toLowerCase()) != -1)
    });

  
    return (

        <div id="home" className="container-fluid">
            <div className="row">
                <div id="cata" className="col-8">Catalogos de Productos</div>
                <div id="buscador" className="col-4">
                    <div className="col-lg-12">
                        <label id="que"> ¿Que estas buscando</label>
                        <input className="form-control col-lg-8 offset-lg-4" label="search" icon="search" type="text" onChange={onchange} value={search}
                            placeholder="Busca Producto"></input>
                    </div>
                </div>
            </div>
            <hr className="my-4"></hr>
            <div className="row card-body">
                {filter.map(item => (
                    <React.Fragment key={item.producto}>
                        <div className="card col-lg-2 col-sm-12 collection" >
                            <img src={item.url} className="img-thumbnail imgProd" />
                            <div className="col-sm-12">
                                <label className="nombreProd"><b>Producto: </b> {item.producto} </label>
                                <br></br>
                                <label className="precioProd"><b>Precio: </b> $<span>{item.precio}</span></label>
                                <label className="cantidadProd"><b>U. disponibles:</b> <span>{item.cantidad}</span></label>
                                <div className="col-sm-5 accionProd">
                                </div>

                                <div className="row btn-group">
                                    <form id="anadir">
                                        <Link to="/Productos" className="btn btn-info btn-sm col-lg-4"  type="" id="vermas">Ver Más </Link>
                                        <input className="btn btn-danger btn-sm col-lg-4" type="submit" id="enviar" />
                                        <input className="btn-sm col-lg-12" id="" name="" type="number" placeholder="1" min="1" max={item.cantidad} style={{ width: "130px" }} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}


export default Lista;