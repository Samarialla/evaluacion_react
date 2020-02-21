import React, { useState} from "react";
import Nav from './Nav';
import Lista from './Lista';

const Home = (props) => {
  const [cantidadCarrito, setcantidadCarrito] = useState(0);
  const [cantidadCarritototal, setcantidadCarritototal] = useState('');
  const agregarCantidad = (cantidad) => {
    if(cantidad !== -1 || cantidadCarrito !== -1){
      const suma = (cantidadCarrito + cantidad)
      setcantidadCarrito(suma);
      setcantidadCarritototal(suma)
    }
  }
  return (
    <>
      <Nav cantidadEnCarrito={cantidadCarritototal} />
      <Lista agregarCantidadGlobal={agregarCantidad} />
    </>
  );
};

export default Home;
