import React, { useState } from 'react'

function UpPage({products,setNumber}) {
    const handleClickShowProducts = ()=>{
        setNumber(4+products.length)
    }
  return (
    <>
     <button onClick={handleClickShowProducts}>xem thêm</button>   
    </>
  )
}

export default UpPage