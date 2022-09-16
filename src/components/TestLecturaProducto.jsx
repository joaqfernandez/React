// import React, { useState, useEffect } from 'react'
// import {getFirestore, doc, collection, getDoc} from 'firebase/firestore';

// export default function TestLecturaProducto() {
//     const [producto, setProducto] = useState({})

//     useEffect(() => {
//         const db= getFirestore()
//         const productoRef = doc(db, 'products', 'EoIv2HjgqzTZlrANGIE3');
//         getDoc(productoRef).then((res) => {
//             const miobjeto = (...res.data(), id: res.id)
//             console.log(miobjeto)
//             setProducto(miobjeto)
//         })
//     }, [])
    
//     return (
//         <div>
//                 asda
//         </div>
//     )
// }
