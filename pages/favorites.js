import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import ProductModal from "../components/ProductModal";

function Favorites() {
  const { favorites } = useSelector((store) => store.favorites);
  return (
    <div className="pageContainer">
      <Head>
        <title>Favorites</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />

      <ProductModal />
      <h1 className="text-center font-bold text-5xl">Favorites</h1>
      {favorites.length >= 1 ? (
        <div className="productsGrid">
          {favorites.map((item) => {
            const { id } = item;
            return <Product key={id} product={item} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[500px]">
          <p>No item added to favorites.</p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Favorites;
