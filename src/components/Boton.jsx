import React, {useState, useEffect} from 'react';

let render = 0;
export default function Boton({contador, setContador}) {

render = render + 1;
console.log(render);



    return (
        <div>
            <h1>Carrito: {contador}</h1>
            <button onClick={() =>{
                setContador(contador - 1);
            }}
            >
                Restar del carrito
            </button>

            <button onClick={() =>{
                setContador(contador + 1);
            }}>
                Sumar al carrito
            </button>
        </div>
    )
}
