import React from 'react'
import { useDispatch } from 'react-redux'
import { setDefault, setSearch } from '../../../store/slices/productsSlice'
import './search.css'

const InputSearch = () => {

    const dispatch = useDispatch()



    const handleOnChange = (e) => {
        dispatch(setSearch(e.target.value))
        if (e.target.value === '') {
            dispatch(setDefault())
            //dispatch(fetchAllUsersAsync())
        }
        e.preventDefault()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className='search'
                    placeholder='Buscar...'
                    onChange={handleOnChange} />
            </form>
        </>

    )
}

export default InputSearch
