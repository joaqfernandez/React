import React from 'react'

export default function ItemList() {
  return (
    <div>
        {productos.map((item) => (
          <div>
            <p> {item.id}</p>
            <p> {item.name}</p>
            <p> {item.price}</p>
          </div> 
        ))}
    </div>
  )
}
