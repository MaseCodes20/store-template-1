import { HeartIcon } from "@heroicons/react/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../features/favorites/favoritesSlice";

function FavoritesButton({ id, product }) {
  const { favorites } = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  const favoriteItem = favorites.find((item) => item.id === id);

  return (
    <button
      className="mx-1"
      aria-label="Favorite button"
      onClick={() => {
        if (favoriteItem) {
          dispatch(removeFromFavorites(id));
          return;
        }
        dispatch(addToFavorites(product));
      }}
    >
      <HeartIcon className={favoriteItem ? `h-7 fill-red-500` : `h-7`} />
    </button>
  );
}

export default FavoritesButton;
