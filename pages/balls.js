import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import ProductModal from "../components/ProductModal";
import balls from "../products/balls/soccerBalls.json";

function Balls() {
  return (
    <div className="pageContainer">
      <Head>
        <title>Balls</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />

      <ProductModal />
      <div className="productsGrid">
        {balls
          ?.sort((a, b) => b.price - a.price)
          .map((ball) => {
            const { id, imageURLS, name, price, brand } = ball;
            return (
              <Product
                key={id}
                imageURLS={imageURLS}
                brand={brand}
                name={name}
                price={price}
                id={id}
                product={ball}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Balls;
