import React from "react";
import Head from "next/head";
import clothings from "../../products/clothing/soccerClothing.json";
import Header from "../../components/Header";
import ProductModal from "../../components/ProductModal";
import Product from "../../components/Product";

function Shorts() {
  return (
    <div>
      <Head>
        <title>Shorts</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />
      <ProductModal />

      <div className="productsGrid">
        {clothings
          ?.filter((item) => item.style === "Shorts")
          .sort((a, b) => b.price - a.price)
          .map((short) => {
            const { id } = short;
            return <Product key={id} product={short} />;
          })}
      </div>
    </div>
  );
}

export default Shorts;
