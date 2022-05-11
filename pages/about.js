import { UserIcon } from "@heroicons/react/outline";
import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <div className="pageContainer">
      <Header />
      <div className="text-center">
        <div className="relative min-h-screen">
          <div className="centered w-full">
            <h1 className="font-bold text-3xl">Company Name</h1>
            {/* About Section */}
            <div className="md:flex items-center mx-auto my-5 lg:max-w-3xl">
              <div className="mx-3">
                <h1 className="mb-6 font-semibold text-lg">About</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum minima debitis necessitatibus fugiat ducimus atque
                  praesentium eius, consequatur sequi vitae placeat eum veniam
                  nemo aut consectetur suscipit dolorum iure expedita. Eum
                  voluptates, alias illum eaque modi deserunt laborum.
                  Praesentium, omnis.
                </p>
              </div>

              <img
                src="https://retaildesignblog.net/wp-content/uploads/2014/06/Nike-store-Seoul-South-Korea-720x480.jpg"
                alt="store interior"
                className="h-[300px] w-[300px] mx-auto mt-5 lg:mt-0 lg:mx-3"
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full min-h-screen">
          <h1 className="font-bold text-3xl my-5">Team</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto my-5 w-fit">
            <div className="h-[300px] w-[300px] text-center border-2 rounded-md border-black p-2">
              <UserIcon className="h-20 mx-auto" />
              <h1 className="font-semibold my-2">Last Name, First Name</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                consequuntur tempore quae nihil minus, repellendus ipsum iure
                doloribus cumque corporis!
              </p>
            </div>

            <div className="h-[300px] w-[300px] text-center border-2 rounded-md border-black p-2">
              <UserIcon className="h-20 mx-auto" />
              <h1 className="font-semibold my-2">Last Name, First Name</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                consequuntur tempore quae nihil minus, repellendus ipsum iure
                doloribus cumque corporis!
              </p>
            </div>

            <div className="h-[300px] w-[300px] text-center border-2 rounded-md border-black p-2">
              <UserIcon className="h-20 mx-auto" />
              <h1 className="font-semibold my-2">Last Name, First Name</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                consequuntur tempore quae nihil minus, repellendus ipsum iure
                doloribus cumque corporis!
              </p>
            </div>

            <div className="h-[300px] w-[300px] text-center border-2 rounded-md border-black p-2">
              <UserIcon className="h-20 mx-auto" />
              <h1 className="font-semibold my-2">Last Name, First Name</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                consequuntur tempore quae nihil minus, repellendus ipsum iure
                doloribus cumque corporis!
              </p>
            </div>

            <div className="h-[300px] w-[300px] text-center border-2 rounded-md border-black p-2">
              <UserIcon className="h-20 mx-auto" />
              <h1 className="font-semibold my-2">Last Name, First Name</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                consequuntur tempore quae nihil minus, repellendus ipsum iure
                doloribus cumque corporis!
              </p>
            </div>

            <div className="h-[300px] w-[300px] text-center border-2 rounded-md border-black p-2">
              <UserIcon className="h-20 mx-auto" />
              <h1 className="font-semibold my-2">Last Name, First Name</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                consequuntur tempore quae nihil minus, repellendus ipsum iure
                doloribus cumque corporis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
