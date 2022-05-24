import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import ProductModal from "../components/ProductModal";
import clothings from "../products/clothing/soccerClothing.json";

function Clothing() {
  return (
    <div className="pageContainer">
      <Head>
        <title>Clothing</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />
      <ProductModal />
      <div className="productsGrid">
        {clothings
          ?.sort((a, b) => b.price - a.price)
          .map((clothing) => {
            const { id } = clothing;
            return <Product key={id} product={clothing} />;
          })}
      </div>

      <Footer />
    </div>
  );
}

export default Clothing;
