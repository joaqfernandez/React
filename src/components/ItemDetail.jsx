import React, {useState, useEffect} from 'react'
import Boton from './Boton'

export default function ItemDetail({data}) {


    const [contador, setContador] = useState(1)
return (
    <div>
            {data.id ? (
                <div>
                    <p>{data.title}</p>
                    <p>{data.description}</p>
                    <p>{data.price}</p>
                    <Boton contador={contador} setContador={setContador}/>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
