import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Product from "../../components/Product";
import ProductModal from "../../components/ProductModal";
import clothings from "../../products/clothing/soccerClothing.json";

function Jerseys() {
  return (
    <div className="pageContainer">
      <Head>
        <title>Jerseys</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />
      <ProductModal />

      <div className="productsGrid">
        {clothings
          ?.filter((item) => item.style === "Top")
          .sort((a, b) => b.price - a.price)
          .map((jersey) => {
            const { id, imageURLS, brand, name, price } = jersey;
            return (
              <Product
                key={id}
                imageURLS={imageURLS}
                brand={brand}
                name={name}
                price={price}
                id={id}
                product={jersey}
              />
            );
          })}
      </div>

      <Footer />
    </div>
  );
}

export default Jerseys;
