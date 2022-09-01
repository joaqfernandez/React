import React from 'react';

export default function Item() {

    const Item = ({product}) => {
    return (
        <div>
            <li>
                <img
                width={200}
                height={260}
                alt={product.id}
                />
                <p>{product.name}</p>
                <h3>{`Precio: $${product.price}`} </h3>
            </li>
        </div>
    )}
}
