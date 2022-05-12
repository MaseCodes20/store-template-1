import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import ProductModal from "../components/ProductModal";
import shinGuards from "../products/shinGuards/soccerShinGuards.json";

function Shinguards() {
  return (
    <div className="pageContainer">
      <Head>
        <title>Shin guards</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />

      <ProductModal />
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
                product={shinGuard}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Shinguards;
