import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import cleats from "../products/boots/soccerCleats.json";

function Cleats() {
  return (
    <div className="pageContainer">
      <Header />
      <div className="productsGrid">
        {cleats
          ?.sort((a, b) => b.price - a.price)
          .map((cleat) => {
            const { id, imageURLS, name, price, brand } = cleat;
            return (
              <Product
                key={id}
                imageURLS={imageURLS}
                brand={brand}
                name={name}
                price={price}
                id={id}
                product={cleat}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Cleats;
