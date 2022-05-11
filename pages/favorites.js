import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Product from "../components/Product";

function Favorites() {
  const { favorites } = useSelector((store) => store.favorites);
  return (
    <div>
      <Header />

      <h1 className="text-center font-bold text-5xl">Favorites</h1>

      <div className="productsGrid">
        {favorites.map((item) => {
          const { id, imageURLS, brand, name, price } = item;
          return (
            <Product
              key={id}
              imageURLS={imageURLS}
              brand={brand}
              name={name}
              price={price}
              id={id}
              product={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
