import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { collection, doc, getDoc } from 'firebase/firestore';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
    const [productDetail, setProductDetail]= useState({})
    const [data, getData] = useState([]);
    const {id}=useParams()

    // useEffect(() =>{
    //   fetch('https://fakestoreapi.com/products/1')
    //   .then((response) => response.json())
    //   .then((json) => getData(json))

    // });

    useEffect(() =>{
      const coleccionProductos = collection(db, "products")
      const referenciaDoc = doc(coleccionProductos, id)

      getDoc(referenciaDoc)
      .then((result) =>{
        setProductDetail({
          id:result.id,
          ...result.data()
        })
      })
      .catch((error) => console.log(error))
      
    },[])




  return (
    <div>
        <ItemDetail data={data}/>
    </div>
  )
}
