import React from "react";

let dataServices = [
  "Donec vitae odio nisl daplibus malesuda1",
  "Donec vitae odio nisl daplibus malesuda2",
  "Donec vitae odio nisl daplibus malesuda3",
  "Donec vitae odio nisl daplibus malesuda4",
];

const Service = ({service}) => {
  return (
    <div className="w-56 flex justify-between gap-x-4 hover-background-grid-sec4 ">
      <span className="border-2 border-black rounded-full"></span>
      <p className="p-2">{service}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="mt-40" id="services">
      <div className="contanier xl:px-16 lg:px-8 sm:px-6 flex justify-between lg:items-start md:items-start">
        <div className="grid grid-cols-2 gap-4">
          <div id="Image-grid-1" className="row-span-3">
            <img
              src="/images/img-grid-1.jpg"
              alt=""
              className="rounded-md w-96 row-start-1 row-end-2 z-40"
              width={350}
              height={450}
            />
          </div>
          <div>
            <img
              src="/images/img-grid-2.jpg"
              alt=""
              className="rounded-md"
              width={250}
              height={200}
            />
          </div>
          <div className="col-start-2 col-end-3">
            <img
              id="Image-trans-y"
              src="/images/img-grid-3.jpg"
              alt=""
              className="rounded-md w-72 col-start-2 col-end-3"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div id="text-section-3" className="flex flex-col gap-y-10 w-96">
          <h2 className="text-3xl font-medium">
            We Help You Make Modern Interior Design
          </h2>
          <p className="text-gray-400">
            Donec vitae odio nisl daplibus malesuda Aliquam vulputate velit.
            Nullam ac aliqute velit. Aliquam vulputate velit velit imperdiet
            dolor tempor tristique
          </p>
          <div className="grid lg:grid-cols-2 lg:text-start md:grid-col-1 md:text-center gap-8 ">
            {dataServices.map(s => (
              <Service service={s} key={s} />
            ))}
          </div>
          <div>
            <button className="bg-black py-2 px-7 rounded-full font-semibold text-white">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
