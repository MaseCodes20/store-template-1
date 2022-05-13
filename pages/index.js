import Head from "next/head";
import { useRouter } from "next/router";
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

      <div className="h-screen lg:flex justify-between items-center my-20 px-10">
        <div className="">
          <a
            onClick={() => router.push("/cleats")}
            className="cursor-pointer"
            aria-label="Link to soccer cleats page"
          >
            <img
              className="max-h-[300px] mx-auto lg:mx-0"
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/8f35d730-665b-442b-b01c-f586b3928401/nike-soccer.jpg"
              alt="Soccer cleats"
            />
          </a>

          <button
            onClick={() => router.push("/cleats")}
            className="homePageBodyButton"
          >
            Soccer cleats
          </button>
        </div>

        <div className="">
          <a
            onClick={() => router.push("/shinguards")}
            className="cursor-pointer"
            aria-label="Link to shin guards page"
          >
            <img
              className="max-h-[300px] mx-auto lg:mx-0"
              src="https://strivechallenge.com/wp-content/uploads/2018/02/shinguard-1.jpg"
              alt="soccer shin guards"
            />
          </a>

          <button
            onClick={() => router.push("/shinguards")}
            className="homePageBodyButton"
          >
            Shin guards
          </button>
        </div>

        <div className="">
          <a
            onClick={() => router.push("/balls")}
            className="cursor-pointer"
            aria-label="Link to balls page"
          >
            <img
              className="max-h-[300px] mx-auto  lg:mx-0"
              src="https://athleticlift.com/wp-content/uploads/2019/05/soccer_ball_facts_005.jpg"
              alt="soccer ball"
            />
          </a>

          <button
            onClick={() => router.push("/balls")}
            className="homePageBodyButton"
          >
            Soccer balls
          </button>
        </div>
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
    </div>
  );
}
