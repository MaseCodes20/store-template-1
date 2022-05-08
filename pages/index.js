import Head from "next/head";
import Header from "../components/Header";
import SaleBar from "../components/SaleBar";

export default function Home() {
  return (
    <div className="px-[52px]">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className="text-center">Web store</h1>
      <SaleBar />
      <div className="w-full">
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/1910f3f8-447d-4893-8968-fe46a4f8fd18/nike-soccer.jpg"
          alt="Sophia's first touch"
        />
      </div>

      <div>
        <div className="flex justify-between items-center my-20 px-10">
          <div className="">
            <img
              className="max-h-[300px]"
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/8f35d730-665b-442b-b01c-f586b3928401/nike-soccer.jpg"
              alt="Soccer cleats"
            />

            <button>page button</button>
          </div>

          <div className="">
            <img
              className="max-h-[300px]"
              src="https://strivechallenge.com/wp-content/uploads/2018/02/shinguard-1.jpg"
              alt="soccer shin guards"
            />

            <button>page button</button>
          </div>

          <div className="">
            <img
              className="max-h-[300px]"
              src="https://athleticlift.com/wp-content/uploads/2019/05/soccer_ball_facts_005.jpg"
              alt="soccer ball"
            />

            <button>page button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
