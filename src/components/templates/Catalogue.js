import React from 'react'
import ImageShoesGrid from '../organism/ImageShoesGrid'
import './catalogue.css'

const Catalogue = () => {
    return (
        <div className='screen bg-dark'>
           
            <div className='container-fluid d-flex p-1 justify-content-center'>
                <ImageShoesGrid />
            </div>
        </div>
    )
}

export default Catalogue
