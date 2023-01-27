import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsSelected, setProductsSelected } from '../../../store/slices/productsSlice'
import ImageShoes from '../../atoms/ImageShoes'
import details from '../../resources/details.svg'
import './imageshoes.css'

const ImageShoesContainer = ({ item }) => {

  const dispatch = useDispatch()
  const statusItem = useSelector(getProductsSelected)
  const [statusItemDetails, setStatusItemDetails] = useState(statusItem)
  const [itemActive, setitemActive] = useState(null)

  const activeProductById = (id) => {
    dispatch(setProductsSelected(id))
  }

  const setActiveDetailsById = (id) => {
    setitemActive(id)
  }

  useEffect(() => {
    if (itemActive !== null) {
      setTimeout(() => {
        setitemActive(null)
      }, 4000);
    }
  }, [itemActive])


  const getStatusItemById = (id) => {
    let st = statusItem.includes(id)
    if (st) {
      return 'border-primary'
    } else {
      return ''
    }
  }

  const handleOnDetails = (id) => {
    if (id === itemActive) {

    }
  }

  return (
    <div
     className={`row contenedor align-items-center d-flex p-0 m-0 border border-2 ${getStatusItemById(item.id) && 'active'} ${getStatusItemById(item.id)}`} >

      {
        itemActive === item.id
          ?
          <ItemDetailsActive activeProductById={activeProductById} setActiveDetailsById={setActiveDetailsById} item={item} getStatusItemById={getStatusItemById} />
          :
          <ItemNormal activeProductById={activeProductById} setActiveDetailsById={setActiveDetailsById} item={item} getStatusItemById={getStatusItemById} />
      }

    </div>
  )
}

const ItemNormal = ({ item, getStatusItemById, setActiveDetailsById,activeProductById }) => {
  return (<>

    <div className={`col-7 text fs-6 text-light ${getStatusItemById(item.id)} text-start mt-1`}>
      {item.name}
    </div>
    <div className={`col-5 d-flex justify-content-center m-0 px-2 text fs-5 text-danger align-items-center  ${getStatusItemById(item.id)}`}
      onClick={() => setActiveDetailsById(item.id)}
    >
      <img className='icono-detailsmt-1 me-2' alt='icon details' src={details} />
      <div>${item.price}</div>
    </div>
    <div className={`col-12`} onClick={() => activeProductById(item.id)}>
      <ImageShoes image={item.image} />
    </div>
  </>
  )
}

const ItemDetailsActive = ({ item, getStatusItemById, setActiveDetailsById }) => {
  return (<>
    <div className='d-flex fw-bolder flex-column fs-6 w-100 h-100 px-1 bg-dark'>

      <div className='d-flex flex-row border-bottom mt-1'>
        <div className='col text-light text-start border-end  '>ID</div>
        <div className='col text-light ms-1 fs-6 text-start '>{item.id}</div>
      </div>

      <div className='d-flex flex-row border-bottom mt-1'>
        <div className='col text-light text-start border-end '>Nombre</div>
        <div className='col text-light fs-6 ms-1 text-start'>{item.name}</div>
      </div>

      <div className='d-flex flex-row border-bottom mt-1'>

        <div className='col text-light text-start border-end '>Precio</div>
        <div className='col text-light  fs-6 ms-1 text-start'>{item.price}</div>
      </div>

      <div className='d-flex flex-row border-bottom mt-1'>
        <div className='col text-light text-start border-end '>Estado</div>
        <div className='col text-light  fs-6 text-start ms-1'>disponible</div>
      </div>


      <div className='col-12 text-primary  fs-6 text-center text-primary mt-1'>masculino</div>


    </div>
  </>
  )
}

export default ImageShoesContainer