import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
  isLoading: true,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addItemToCart: (state, action) => {
    //   [...state, action.payload];
    // },
    // removeItemFromCart: (state, action) => {
    //   state?.filter((item) => item.id !== action.payload.id);
    // },
    // addItemToCartByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// console.log(cartSlice);
// Action creators are generated for each case reducer function
// export const { addItemToCart, removeItemFromCart, addItemToCartByAmount } =
//   cartSlice.actions;

export default cartSlice.reducer;
