import React from 'react'
import './imageshoes.css'

const ImageShoes = ({ image, status }) => {

  
  return (
    <>

    <img src={image} alt="imagen de zapatos" className={`imagen img-fluid`} />
    </>
  )
}

export default ImageShoes
