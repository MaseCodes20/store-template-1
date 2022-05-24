import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
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
            const { id } = shinGuard;
            return <Product key={id} product={shinGuard} />;
          })}
      </div>

      <Footer />
    </div>
  );
}

export default Shinguards;
