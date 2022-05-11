import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Product from "../../components/Product";
import cleats from "../../products/boots/soccerCleats.json";

function Indoor() {
  return (
    <div className="pageContainer">
      <Head>
        <title>Cleats/Indoor</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />
      <div className="productsGrid">
        {cleats
          ?.filter((cleat) => cleat.surface === "Indoor")
          .sort((a, b) => b.price - a.price)
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

export default Indoor;