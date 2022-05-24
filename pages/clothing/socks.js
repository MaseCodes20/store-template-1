import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Product from "../../components/Product";
import ProductModal from "../../components/ProductModal";
import clothings from "../../products/clothing/soccerClothing.json";

function Socks() {
  return (
    <div>
      <Head>
        <title>Socks</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />
      <ProductModal />

      <div className="productsGrid">
        {clothings
          ?.filter((item) => item.style === "Socks")
          .sort((a, b) => b.price - a.price)
          .map((sock) => {
            const { id } = sock;
            return <Product key={id} product={sock} />;
          })}
      </div>
    </div>
  );
}

export default Socks;
