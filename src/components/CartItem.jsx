import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartItem({compra}) {
    const {removeItem}= useCart()

    
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem' }}>
                <img src={compra.img} alt={compra.name}/>
                <span>{compra.name}</span>
                <span>{compra.quantity}</span>
                <span>${compra.price}</span>
                <button className='btn btn-danger' onclick={()=>removeItem(compra.id)}></button>
            </div>
    </div>
    )
}
