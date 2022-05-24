import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import ProductModal from "../components/ProductModal";
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

      <ProductModal />
      <div className="productsGrid">
        {gloves
          ?.sort((a, b) => b.price - a.price)
          .map((glove) => {
            const { id } = glove;
            return <Product key={id} product={glove} />;
          })}
      </div>

      <Footer />
    </div>
  );
}

export default Gloves;
