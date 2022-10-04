import React, { useState, useEffect} from 'react';
import ItemList from './ItemList';
import {collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../firebase/firebase'
import { useParams } from 'react-router-dom';
import 'animate.css';

export default function Promesa() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')
    const{categoriaId}= useParams()

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
        <div class="animate__animated animate__fadeInUp">
            <p>{loading ? 'Loading.......' : ''}</p>

            <ItemList products={products}/>
        </div>
    ) 
}