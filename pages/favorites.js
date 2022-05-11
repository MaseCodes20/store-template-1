import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Product from "../components/Product";

function Favorites() {
  const { favorites } = useSelector((store) => store.favorites);
  return (
    <div className="pageContainer">
      <Head>
        <title>Favorites</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />

      <h1 className="text-center font-bold text-5xl">Favorites</h1>
      {favorites.length >= 1 ? (
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
      ) : (
        <div className="centered font-semibold">
          <p>No item added to favorites.</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
