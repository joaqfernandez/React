import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext, useCart } from "../context/CartContext";
import Boton from "./Boton";

export default function ItemDetail({ data }) {
    const {
        compra,
        setCompra,
        count,
        setCount,
        contador,
        setContador,
        addItem2,
    } = useCart();

    
  // Joaco centrémonos en este componente. Veamos lo que me traigo del context. Si bien tenés en el una función addItem, la misma debe ser empleada donde
  //queremos hacer su uso. Entonces pasando en limpio la lógica que podemos aplicar sería. ¿Qué quiero hacer cuando presiono en el botón agregar?
  //Efectivamente quiero agregar un producto al carrito. Puedo declarar una función que esté en mi detalle de producto, la cual al ejecutarse me añada el mismo.
  // Acá abajo la declaramos. ¿Qué hacemos? En el caso que te muestro, declara un producto que va a ser una copia de la data (Si tenemos dudas de que es data le hacemos un  console.log())
  // y quantity, que como queremos que sea la cantidad de productos diremos que es count
  //Entonces acá es donde voy a usar addItem2(), a ese addItem2 le paso el producto que declaro como variable.
  //Finalmente creo un botón que llama a la función. Veamos que sucede en consola cuando lo ejecutamos.

    const agregarAlCarro = () => {
        const producto = { ...data, quantity: count };
        addItem2(producto);
        console.log(producto);
        console.log(producto.quantity);
    };

    return (
        <div>
        {data.id ? (
            <div>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <button onClick={agregarAlCarro}>Agregar producto al carrito</button>
            <Boton contador={contador} setContador={setContador} />
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
}
