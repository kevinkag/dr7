import React from 'react'
import './modalimage.css'

const index = ({item}) => {
  return (
    <div className='d-flex la position-absolute w-100 h-100'>
        <img className='image' src={item.image} alt='imagen extendida'/>
    </div>
  )
}

export default index
