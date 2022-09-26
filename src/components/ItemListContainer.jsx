import React, { useState, useEffect} from 'react';
import ItemList from './ItemList';
import {collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../firebase/firebase'
import { useParams } from 'react-router-dom';


export default function Promesa() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')
    const{categoriaId}= useParams()

//mock
    // const promesaProductos = new Promise((res, rej) =>{
    //     setTimeout(() =>{
    //         res([
    //             {id: 100, name: 'zapato', price: 100, desc: 'Zapato que te hara correr mas rapido que'},
    //             {id: 101, name: 'cartera', price: 150, desc: 'cartera para verte mas fashon que wanda nara' },
    //             {id: 102, name: 'pelota', price: 200, desc: 'pelota que pateas y va al angulo'}
    //         ]);
    //     }, 2000);
    // })
    // console.log(promesaProductos);
    // promesaProductos
    //     .then((res) =>{
    //         setProducts(res);
    //     })
    //     .catch((err) =>{
    //         setError(err);
    //     })

    //     .finally((res) =>{
    //         setLoading(false);
    //     })

//firebase 
useEffect(()=>{
    setLoading(true)
    const coleccionProductos= categoriaId ? query(collection(db, "products"), where("category", "==", categoriaId)) : collection(db, "products")
    getDocs(coleccionProductos)
    .then((result)=> {
        const lista = result.docs.map((producto)=>{
        return{
            id:producto.id,
            ...producto.data()
        }
        })
        setProducts(lista)
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
}, [categoriaId])

    console.log(products)

    return (
        <div>
        <p>Loading: {loading ? 'Loading.......' : 'Cargado con exito'}</p>

        <ItemList products={products}/>

        </div>
    ) 
}