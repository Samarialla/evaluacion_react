import React, { useState} from "react";
import Nav from './Nav';
import Lista from './Lista';

const Home = () => {
  const [cantidadCarrito, setcantidadCarrito] = useState('');
  const agregarCantidad = (cantidad) => {
    setcantidadCarrito(cantidadCarrito + cantidad)
  }
  return (
    <>
      <Nav cantidadEnCarrito={this.cantidadCarrito} />
      <Lista agregarCantidadGlobal={this.agregarCantidad} />
    </>
  );
};

export default Home;
