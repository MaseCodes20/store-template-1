import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    openProductDetails: (state) => {
      state.isOpen = true;
    },
    closeProductDetails: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openProductDetails, closeProductDetails } =
  productModalSlice.actions;

export default productModalSlice.reducer;
