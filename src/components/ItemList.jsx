import React from 'react'
import Item from './Item'

export default function ItemListItemList({products}){

  return (
    <div>
        <ul>
            {products.map(producto  => {
            return  <Item product={producto} />
            })}
        </ul>
    </div>
  )
}
