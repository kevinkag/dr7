import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductList, setPrimaryDefault } from '../../../store/slices/productsSlice'
import ImageShoesContainer from '../../molecules/ImageShoesContainer'

const ImageShoesGrid = () => {

    const dispatch = useDispatch()
    const products = useSelector(getProductList)

    useEffect(() => {
        //dispatch(fetchAllUsersAsync
        dispatch(setPrimaryDefault())
    }, [dispatch])

    return (
        <>
            {
                    <div className="row row-cols-2 gx-2 gy-2 mt-5">
                        {
                            products.map((item) => (
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