import React from 'react'
import  { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useCart } from '../context/CartContext'
import CartItem from './CartItem';


export default function Cart() {

    const { cart, removeItem, clear, cartTotal } = useCart()
    const navegar = useNavigate()
    return (
        <div>
            {
                !cart.length
                ?<div>
                    <h2>Tu carrito esta vacio</h2>
                    <h4> Te invitamos a ver nuestros productos</h4>
                    <button onclick={()=>navegar('/')}> ir a comprar</button>
                </div>
                :<div>
                    <h2>Tu carrito</h2>
                    {cart.map((compra) => <CartItem key={compra.id} compra={compra}/>)}
                    <span>total a pagar: ${cartTotal()}</span>
                    <button className='btn btn-danger' onclick={clear}>Vaciar carrtito</button>
                    <button className='btn btn-success'>Terminar compra</button>
                </div>
            }
        </div>
    )
}
