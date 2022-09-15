import React from 'react'
import  { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useCart } from '../context/CartContext'


export default function Cart() {

    const { cart } = useCart()
    console.log('carrito', cart)

    return (
        <div>CARRO TORO</div>
    )
}
