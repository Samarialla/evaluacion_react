import React, { useState } from "react";
import Nav from './Nav';
import Lista from './Lista';
import Productos from "./Productos";


const Home = (props) => {
  const [cantidadCarrito, setcantidadCarrito] = useState(0);
  const [cantidadCarritototal, setcantidadCarritototal] = useState('');
  const [productoscarro, setProductoscarro] = useState('');
  const [home, setHome] = useState(false)
  const agregarCantidad = (cantidad) => {
    if (cantidad !== -1 || cantidadCarrito !== -1 || cantidad !== '' || cantidad !== null || cantidadCarrito !== '' || cantidadCarrito !== null) {
      const suma = (cantidadCarrito + cantidad)
      setcantidadCarrito(suma);
      setcantidadCarritototal(suma)
    }
  }
  const item = (productos) => {
    setProductoscarro(productos)
  }
  const mostrarMenu = () => {
    setHome(true)
  }
  const menulista = ()=>{
    setHome(false)
  }

  if (!home) {
    return (
      <>
        <Nav cantidadEnCarrito={cantidadCarritototal} itemcarro={productoscarro} mostrar={mostrarMenu} mostrarMenulista={menulista} />
        <Lista agregarCantidadGlobal={agregarCantidad} agregarProductos={item} />
      </>
    );
  } else {
    return (
      <>
        <Nav cantidadEnCarrito={cantidadCarritototal} mostrar={mostrarMenu} mostrarMenulista={menulista} />
        <Productos itemcarro={productoscarro} />
      </>
    );
  }


};

export default Home;

