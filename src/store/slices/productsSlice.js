import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProducts } from '../../services/actions'

const initialState = {
    list: fetchProducts,
    listDefault: [],
    search: [],
    status: 'idle',
    error: null,
    statusBar: false,
    productsSelected: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setStatusBar: (state, action) => {
            state.statusBar = action.payload
        },
        setDefault: (state, action) => {
            state.list = state.listDefault
        },
        setPrimaryDefault: (state) => {
            state.listDefault = state.list
        },
        setSearch: (state, action) => {
            if (action.payload === '') {
                
            }
            const list = state.list
           
            const filterList = list.filter((item) => item.name.includes(action.payload))
            state.list = filterList
        },
        setProductsSelected: (state, action) => {
            const list = state.productsSelected
            const st = list.includes(action.payload)
            if (st) {
                const ala = list.filter((item) => item !== action.payload)
                state.productsSelected = ala
                return
            }
            state.productsSelected = [...state.productsSelected, action.payload]
            console.log(state.productsSelected)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsersAsync.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchAllUsersAsync.rejected, (state, action) => {
                if (state.status === 'pending') {
                    state.status = 'idle'
                    state.error = action.error
                }
            })
            .addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
                state.list = action.payload
                state.status = 'idle'
            })
    }
})

export const fetchAllUsersAsync = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetchProducts();
        return response;
    }
);

export const { setProducts, setStatusBar, setProductsSelected, setSearch, setDefault, setPrimaryDefault } = productsSlice.actions

export const getProductList = (state) => state.products.list
export const getStatusBar = (state) => state.products.statusBar
export const getProductsSelected = (state) => state.products.productsSelected
export const listDefault = (state) => state.products.listDefault

export default productsSlice.reducer