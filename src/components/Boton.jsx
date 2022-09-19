import React, {useState, useEffect} from 'react';
import { useCart } from '../context/CartContext';

let render = 0;
export default function Boton({onAdd, setCount}) {
    const { restar, sumar, count, stock, initial } = useCart()

    return (
        <>
        <div>
            <button className='btn btn-success' onClick={sumar}>+</button>
            <span  className='btn btn-light'>{count}</span>
            <button  className='btn btn-danger'onClick={restar}>-</button>
        </div>
            <button  className='btn btn-primary m-3'onClick={onAdd}>comprar</button>
        </>
    ) 
}
