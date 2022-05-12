import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import productModalReducer from "../features/modal/productModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    favorites: favoritesReducer,
    productModal: productModalReducer,
  },
});
