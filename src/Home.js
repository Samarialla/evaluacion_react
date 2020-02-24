import React, { useState} from "react";
import Nav from './Nav';
import Lista from './Lista';


const Home = (props) => {
  const [cantidadCarrito, setcantidadCarrito] = useState(0);
  const [cantidadCarritototal, setcantidadCarritototal] = useState('');
  const [productoscarro, setProductoscarro] = useState('');
  const agregarCantidad = (cantidad) => {
    if(cantidad != -1 || cantidadCarrito != -1 || cantidad != '' || cantidad != null || cantidadCarrito != '' || cantidadCarrito != null ){
      const suma = (cantidadCarrito + cantidad)
      setcantidadCarrito(suma);
      setcantidadCarritototal(suma)
    }
  }
  const item = (productos) =>{
    setProductoscarro(productos)
    console.log('home '+ JSON.stringify(productoscarro) )
  }

  return (
    <>
      <Nav cantidadEnCarrito={cantidadCarritototal} itemcarro={productoscarro}/>
      <Lista agregarCantidadGlobal={agregarCantidad}  agregarProductos ={item}/>
    </>
  );
};

export default Home;
