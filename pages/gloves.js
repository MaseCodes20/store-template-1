import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import gloves from "../products/gloves/soccerGloves.json";

function Gloves() {
  return (
    <div className="pageContainer">
      <Head>
        <title>Gloves</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />
      <div className="productsGrid">
        {gloves
          ?.sort((a, b) => b.price - a.price)
          .map((glove) => {
            const { id, imageURLS, name, price, brand } = glove;
            return (
              <Product
                key={id}
                imageURLS={imageURLS}
                brand={brand}
                name={name}
                price={price}
                id={id}
                product={glove}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Gloves;
