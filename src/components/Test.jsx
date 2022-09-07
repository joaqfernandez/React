import React, { useState, useEffect } from 'react';

export default function Test() {

  function handleClick(e){
      //console.log(e)
  }
  function handleResize(e){
    alert(JSON.stringify(e));
  }

  const [email, setEmail] = useState('')

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])


  return ( 
  <div onClick={handleClick} style={{border: '1px solid red', margin: '20px', padding: '20px'}}>
    Test
    <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'ingrese su email'} />


    
    <br />

    <button>enviar</button>
  </div>
  
  )

}
