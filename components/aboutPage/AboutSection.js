import React from "react";

function AboutSection() {
  return (
    <div className="md:flex items-center mx-auto my-5 lg:max-w-3xl">
      <div className="mx-3">
        <h1 className="mb-6 font-semibold text-lg">About</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum minima
          debitis necessitatibus fugiat ducimus atque praesentium eius,
          consequatur sequi vitae placeat eum veniam nemo aut consectetur
          suscipit dolorum iure expedita. Eum voluptates, alias illum eaque modi
          deserunt laborum. Praesentium, omnis.
        </p>
      </div>

      <img
        src="https://retaildesignblog.net/wp-content/uploads/2014/06/Nike-store-Seoul-South-Korea-720x480.jpg"
        alt="store interior"
        className="h-[300px] w-[300px] mx-auto mt-5 lg:mt-0 lg:mx-3"
      />
    </div>
  );
}

export default AboutSection;
