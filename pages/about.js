import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Team from "../components/aboutPage/Team";
import AboutSection from "../components/aboutPage/AboutSection";

function About() {
  return (
    <div className="pageContainer">
      <Head>
        <title>About</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />
      <div className="text-center">
        <div className="relative min-h-screen">
          <div className="centered w-full">
            <h1 className="aboutPageTitle">Company Name</h1>

            <AboutSection />
          </div>
        </div>

        <Team />
      </div>

      <Footer />
    </div>
  );
}

export default About;
