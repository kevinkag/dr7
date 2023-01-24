import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsersAsync, getProductList, getStatusBar, setDefault, setPrimaryDefault, setStatusBar } from '../../../store/slices/productsSlice'
import NotResults from '../../atoms/NotResults'
import ImageShoesContainer from '../../molecules/ImageShoesContainer'

const ImageShoesGrid = () => {

    const dispatch = useDispatch()
    const products = useSelector(getProductList)
    const statusBar = useSelector(getStatusBar)

    useEffect(() => {
        //dispatch(fetchAllUsersAsync
        dispatch(setPrimaryDefault())
    }, [dispatch])

    return (
        <>
            {
                
              
                    <div className="row row-cols-2 gx-2 gy-2 mt-5">
                        {
                            products.map((item, key) => (
                                <div className='col'>
                                    <ImageShoesContainer item={item} key={item.id} />
                                </div>
                            ))
                        }
                    </div>
            }

        </>
    )
}

export default ImageShoesGrid