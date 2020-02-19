import React, { useState, useEffect } from "react";
import Modal from 'react-modal'
function Lista() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [set, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [modal, setModal] = useState(false);
    const [productoSeleccionado, setproductoSeleccionado] = useState('');
    const [additem, setAddItem] = useState('');
    const [shop, setShop] = useState('');
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
    const handleOpenModal = (producto, event) => {
        event.preventDefault();
        setproductoSeleccionado(producto)
        Modal.setAppElement('body');
        setModal(true);
        return
    }
    const handleCloseModal = event => {
        event.preventDefault();
        setModal(false)
    }

   const handleAddItem = (producto, event) => {
        event.preventDefault();
        const ob_unidos = Object.assign(producto,additem)
        setShop(ob_unidos);
        this.props.agregarCantidadGlobal(producto.cantidad);
    }

    const onItem = e => {
        setAddItem(e.target.value);
    };
    return (
        <div id="home" className="container-fluid">
            <div className="row">
                <div id="cata" className="col-8">Catalogos de Productos </div>
                <div id="buscador" className="col-4">
                    <div className="col-lg-12">
                        <label id="que"> ¿Que estas buscando</label>
                        <input className="form-control col-lg-8 offset-lg-4" label="search" icon="search" type="text" onChange={onchange}
                            placeholder="Busca Producto"></input>
                    </div>
                </div>
            </div>
            <hr className="my-4"></hr>
            <div className="row card-body">
                {filter.map(item => (
                    <React.Fragment key={item.producto}>
                        <div className="card col-lg-2 col-sm-12 collection" >
                            <img src={item.url} className=" imgProd" />
                            <div className="col-sm-12">
                                <label className="nombreProd"><b>Producto: </b> {item.producto} </label>
                                <br></br>
                                <label className="precioProd"><b>Precio: </b> $<span>{item.precio}</span></label>
                                <label className="cantidadProd"><b>U. disponibles:</b> <span>{item.cantidad}</span></label>
                                <div className="col-sm-5 accionProd">
                                </div>

                                <div className="row btn-group">
                                    <form id="anadir">
                                        <button className="btn btn-info btn-sm col-lg-5" id="vermas" onClick={(event) => handleOpenModal(item, event)}>Ver</button>
                                        <button className="btn btn-danger btn-sm col-lg-5" onClick={(event) => handleAddItem(item, event)} id="enviar" >Añadir</button>
                                        <input className="btn-sm col-lg-10"   type='number'  onChange={onItem}  min="1" max={item.cantidad} style={{ width: "110%" }} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <Modal isOpen={modal} contentLabel="onRequestClose Example" onRequestClose={handleCloseModal} className="Modal">
                <div className='imagen-modal'>
                    <img className="responsive-img" src={productoSeleccionado.url} alt='thumbnail' />
                </div>
                <h4>  </h4>
                <p><b>Producto: </b> {productoSeleccionado.producto} </p>
                <p><b>Precio: </b>$<span>{productoSeleccionado.precio}</span></p>
                <p><b>Unidades Disponibles: </b><span>{productoSeleccionado.cantidad}</span> </p>
                <button id='cerrar' className="btn btn-info btn-sm " onClick={handleCloseModal} >Cerrar</button>
            </Modal>

        </div>
    );
}


export default Lista;