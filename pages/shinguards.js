import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import shinGuards from "../products/shinGuards/soccerShinGuards.json";

function Shinguards() {
  return (
    <div className="pageContainer">
      <Header />
      <div className="productsGrid">
        {shinGuards
          ?.sort((a, b) => b.price - a.price)
          .map((shinGuard) => {
            const { id, imageURLS, name, price, brand } = shinGuard;
            return (
              <Product
                key={id}
                imageURLS={imageURLS}
                brand={brand}
                name={name}
                price={price}
                id={id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Shinguards;
