import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../model/product_model"
import { RootState } from "./store"

export const initialState : {
    carts: Product[],
    wishlists: Product[],
    purchases: Product[],
} = {
    carts: [],
    wishlists: [],
    purchases: [],
}

const userProductSlice = createSlice({
    name: 'products/userProducts',
    initialState,
    reducers: {
        setWishlisted: (state, action) => {
            state.wishlists = action.payload
          },
          setCart: (state, action) => {
            state.carts = action.payload
          },
          setPurchased: (state, action) => {
            state.purchases = action.payload
          },
    }
})

// Action
export const {
    setWishlisted,
    setCart,
    setPurchased,
} = userProductSlice.actions

// Selector

export const selectWishlisted = (state: RootState) => state.userProduct.wishlists

export const selectCart = (state: RootState) => state.userProduct.carts

export const selectPurchased = (state: RootState) => state.userProduct.purchases


//   Reducer
export default userProductSlice.reducer