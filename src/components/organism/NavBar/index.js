import React from 'react'
import cart from '../../resources/shopping-cart.svg'
import cartActive from '../../resources/shopping-cart-active.svg'
import './navbar.css'
import { useSelector } from 'react-redux'
import { getProductsSelected } from '../../../store/slices/productsSlice'
import InputSearch from '../../atoms/InputSearch'

const NavBar = () => {

    const productsSelected = useSelector(getProductsSelected)
    // const dispatch = useDispatch()

    const cartactive = () => {
        let car
        if (productsSelected.length > 0) {
            car = cartActive
        } else {
            car = cart
        }
        return car
    }

    return (
        <div className='bar position-fixed bg-dark w-100 d-flex flex-row px-3 py-2 align-items-center justify-content-between'>
            <div className='text-light fw-bold fs-3'>DR7</div>
            <div className='align-items-start'>
                <InputSearch />
            </div>
            <div className='text-light'>
                {productsSelected.length === 0 ? null : productsSelected.length}<img alt='icon carrito' src={cartactive()} className='icono' />
            </div>
        </div>
        // <div className=' bar position-fixed bg-dark w-100'>
        //     <div className="row shadow-sm d-flex align-items-center">
        //         <div className='col-2 text-light fw-bold fs-3'>DR7</div>
        //         <div className='col-7 d-flex align-items-start'>
        //             <InputSearch />
        //         </div>
        //         <div className='col-2 text-light'>
        //             {productsSelected.length === 0 ? null : productsSelected.length}<img alt='icon carrito' src={cartactive()} className='icono' />
        //         </div>
        //     </div>
        // </div>
    )
}

export default NavBar
