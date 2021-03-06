import Head from "next/head";
import { useRouter } from "next/router";
import Campaigns from "../components/Campaigns";
import DiscountBanner from "../components/DiscountBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SaleBar from "../components/SaleBar";

export default function Home() {
  const router = useRouter();

  return (
    <div className="pageContainer">
      <Head>
        <title>Store Template</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />
      <SaleBar />
      <div className="w-full">
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/1910f3f8-447d-4893-8968-fe46a4f8fd18/nike-soccer.jpg"
          alt="Sophia's first touch"
          className="mx-auto"
        />
      </div>

      <DiscountBanner />

      <div className="md:h-screen lg:flex justify-between items-center px-10 bg-slate-500/10">
        <div className="pt-10 md:pt-0">
          <div
            onClick={() => router.push("/cleats")}
            className="cursor-pointer"
            aria-label="Link to soccer cleats page"
          >
            <img
              className="max-h-[300px] mx-auto lg:mx-0"
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/8f35d730-665b-442b-b01c-f586b3928401/nike-soccer.jpg"
              alt="Soccer cleats"
            />
          </div>

          <button
            onClick={() => router.push("/cleats")}
            className="homePageBodyButton"
          >
            Soccer cleats
          </button>
        </div>

        <div>
          <div
            onClick={() => router.push("/shinguards")}
            className="cursor-pointer"
            aria-label="Link to shin guards page"
          >
            <img
              className="max-h-[300px] mx-auto lg:mx-0"
              src="https://strivechallenge.com/wp-content/uploads/2018/02/shinguard-1.jpg"
              alt="soccer shin guards"
            />
          </div>

          <button
            onClick={() => router.push("/shinguards")}
            className="homePageBodyButton"
          >
            Shin guards
          </button>
        </div>

        <div className="">
          <div
            onClick={() => router.push("/balls")}
            className="cursor-pointer"
            aria-label="Link to balls page"
          >
            <img
              className="max-h-[300px] mx-auto  lg:mx-0"
              src="https://athleticlift.com/wp-content/uploads/2019/05/soccer_ball_facts_005.jpg"
              alt="soccer ball"
            />
          </div>

          <button
            onClick={() => router.push("/balls")}
            className="homePageBodyButton"
          >
            Soccer balls
          </button>
        </div>
      </div>

      <Campaigns />

      <div className="relative w-full my-16">
        <div className="absolute bottom-0 left-0 ml-10 mb-10">
          <p className="font-bold uppercase text-5xl text-white">Nike Soccer</p>
          <p className="text-white my-5">
            Everything you need to own the pitch
          </p>

          <button className="rounded-full bg-white text-black py-2 px-5">
            Shop
          </button>
        </div>
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/6a0f00e5-edce-49d9-8426-13df0b263426/nike-soccer.jpg"
          alt="Sophia's first touch"
          className="mx-auto"
        />
      </div>

      <div className="relative">
        <div className="centered">
          <h1 className="text-white font-bold text-5xl border-2 shadow-md text-center">
            Never lose focus!
          </h1>
        </div>

        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_49/3129726/191202-megan-rapinoe-ac-451p.jpg"
          alt="Megan Rapinoe playing soccer"
          className="w-full"
        />
      </div>

      <Footer />
    </div>
  );
}
