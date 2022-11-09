import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selectedSort: { id: 1, value: 'default', name: 'по умолчанию' },
    productsPerPage: 10,
    isGrid: true,
  },
  reducers: {
    setSelectedSort: (state, action) => {
      state.selectedSort = action.payload
    },
    setProductsPerPage: (state, action) => {
      state.productsPerPage = action.payload
    },
    setListView: (state) => {
      state.isGrid = !state.isGrid
    },
  },
})

const { reducer: filterReducer, actions } = filterSlice

export const { setSelectedSort, setProductsPerPage, setListView } = actions

export const getproductsPerPage = () => (state) => state.filter.productsPerPage

export default filterReducer
