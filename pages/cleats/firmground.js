import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Product from "../../components/Product";
import ProductModal from "../../components/ProductModal";
import cleats from "../../products/boots/soccerCleats.json";

function Firmground() {
  return (
    <div className="pageContainer">
      <Head>
        <title>Cleats/Firm ground</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />

      <ProductModal />
      <div className="productsGrid">
        {cleats
          ?.filter((cleat) => cleat.surface === "Firm ground")
          .sort((a, b) => b.price - a.price)
          .map((cleat) => {
            const { id } = cleat;
            return <Product key={id} product={cleat} />;
          })}
      </div>

      <Footer />
    </div>
  );
}

export default Firmground;
