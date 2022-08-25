import React, {useState, useEffect} from 'react';

let render = 0;
export default function Boton() {

render = render + 1;
console.log(render);

const [contador, setContador] = useState(0);

    return (
        <div>
            <h1>Contador:{contador}</h1>
            <button onClick={() =>{
                setContador(contador - 1);
            }}
            >
                Restar Numero al contador
            </button>

            <button onClick={() =>{
                setContador(contador + 1);
            }}>
                Sumar numero al contador
            </button>
        </div>
    )
}
