import React, { useState, useEffect} from 'react';
import ItemList from './ItemList';


export default function Promesa() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')


    const promesaProductos = new Promise((res, rej) =>{
        setTimeout(() =>{
            res([
                {id: 100, name: 'zapato', price: 100},
                {id: 101, name: 'cartera', price: 150},
                {id: 102, name: 'pelota', price: 200}
            ]);
        }, 2000);
    })
    console.log(promesaProductos);
    promesaProductos
        .then((res) =>{
            setProducts(res);
        })
        .catch((err) =>{
            setError(err);
        })

        .finally((res) =>{
            setLoading(false);
        })

    return (
        <div>
        <p>Loading: {loading ? 'Loading.......' : 'Cargado con exito'}</p>

        <ItemList promesaProductos={products}/>

        </div>
    ) 
}