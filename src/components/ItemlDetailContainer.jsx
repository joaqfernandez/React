import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {

    const [data, getData] = useState([]);

    useEffect(() =>{
      fetch('https://fakestoreapi.com/products/1')
      .then((response) => response.json())
      .then((json) => getData(json))

    })
  return (
    <div>
        <ItemDetail data={data}/>
    </div>
  )
}
