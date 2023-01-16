import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        cartTotalPrice: 0,
        cartTotalQuantity: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.cartTotalQuantity += 1;
            state.products.push(action.payload);
            state.cartTotalPrice += action.payload.price * action.payload.quantity;
        },
    },



    })

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;


