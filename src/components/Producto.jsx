import React from 'react'

export default function Producto(item, color) {

return (
    <div style={(item, color)}>
        <h2>id {item.id}</h2>
        <h2>{item.name}</h2>
        <h2>precio $ {item.price}</h2>
    </div>
)
}
