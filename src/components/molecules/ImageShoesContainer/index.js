import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsSelected, setProductsSelected } from '../../../store/slices/productsSlice'
import ImageShoes from '../../atoms/ImageShoes'
import './imageshoes.css'

const ImageShoesContainer = ({ item }) => {

  const dispatch = useDispatch()
  const statusItem = useSelector(getProductsSelected)

  const activeProductById = (id) => {
    dispatch(setProductsSelected(id))
  }

  const getStatusItemById = (id) => {
    let st = statusItem.includes(id)
    if (st) {
      return 'border-primary'
    } else {
      return ''
    }
  }

  return (
    <div className={`row contenedor d-flex p-0 m-0 border border-2 ${getStatusItemById(item.id) && 'active'} ${getStatusItemById(item.id)}`}  onClick={() => activeProductById(item.id)}>
     
      <div className={`col-9 text fs-6  text-dark ${getStatusItemById(item.id)} text-start mt-1`}>{item.name}</div>
      <div className={`col-3 d-flex justify-content-center text fs-5 text-danger  ${getStatusItemById(item.id)}`}>${item.price}</div>
      <div className={`col-12`}>
        <ImageShoes image={item.image} />
      </div>
    </div>
    // <div className={`${getStatusItemById(item.id) && 'active'} row row-cols 2`}>

    //   <div className={`border-bottom border-start border-top border-end ${getStatusItemById(item.id)} contenedor h-100 w-100`} onClick={() => activeProductById(item.id)}>

    //     <div className={`d-flex align-items-center justify-content-between text-light border-bottom ${getStatusItemById(item.id)}`}>
    //       <div className={`fs-6 text text-danger border-end px-1 ${getStatusItemById(item.id)}`}>${item.price}</div>
    //       <div className='text w-100 text-end'>{item.name}</div>
    //     </div>
    //     <ImageShoes image={item.image} />
    //   </div>
    // </div>
  )
}

export default ImageShoesContainer