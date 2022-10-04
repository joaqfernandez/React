import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Botones.css';

const Item = ({product}) => {

    const {id, img, name, description, price, stock}= product
    const navegar = useNavigate()
  return (
    <div className="card" style={{width:'25rem', margin:'.5rem'}}>
      <div style={{ backgroundImage: `url('${img}')`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'contain', width:'100&', height:'25rem'}}/>
    <div className="card-body">
        <p className="card-text fw-bold">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <p className="card-text">stock: {stock}</p>
    </div>
    <button class="bn6" onClick={()=>navegar(`/detalle/${id}`)}>Ver más</button>
  </div>

  )
}

export default Item