import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites = [...state.favorites, { ...payload }];
    },
    removeFromFavorites: (state, { payload }) => {
      const itemId = payload;
      state.favorites = state.favorites.filter((item) => item.id !== itemId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
