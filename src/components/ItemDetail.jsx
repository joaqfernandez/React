import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext, useCart } from "../context/CartContext";
import Boton from "./Boton";

export default function ItemDetail({ data }) {
    
    const { compra, setCompra, contador, setContador, addItem2 } = useCart();
    
return (
        <div>
            {data.id ? (
        <div>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <Boton contador={contador} setContador={setContador} />
        </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
