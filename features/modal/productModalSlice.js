import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  product: [],
};

export const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    openProductDetails: (state, { payload }) => {
      state.product = [...state.product, { ...payload }];
      state.isOpen = true;
    },
    closeProductDetails: (state, { payload }) => {
      const itemId = payload;
      state.product = state.product.filter((item) => item.id !== itemId);
      state.isOpen = false;
    },
  },
});

export const { openProductDetails, closeProductDetails } =
  productModalSlice.actions;

export default productModalSlice.reducer;
