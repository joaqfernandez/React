import React from 'react';

export default function Item({product}) {

    return (
        <div>
            <li>
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <h3>{`Precio: $${product.price}`} </h3>
            </li>
        </div>
    )
}
