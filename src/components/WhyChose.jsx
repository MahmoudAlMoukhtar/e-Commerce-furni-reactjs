import React from "react";

let feachers = [
  {
    id: 1,
    icon: "/images/truck.svg",
    title: "Fast & free shipping",
    descripe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus animi possimus!",
  },
  {
    id: 2,
    icon: "/images/bag.svg",
    title: "Fast & free shipping",
    descripe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus animi possimus!",
  },
  {
    id: 3,
    icon: "/images/support.svg",
    title: "Fast & free shipping",
    descripe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus animi possimus!",
  },
  {
    id: 4,
    icon: "/images/return.svg",
    title: "Fast & free shipping",
    descripe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus animi possimus!",
  },
];

const Feacher = ({feacher}) => {
  const {title, icon, descripe} = feacher;
  return (
    <div id="card-1" className="flex flex-col gap-y-4 w-80">
      <div className="flex lg:justify-start md:justify-center">
        <img src={icon} alt="" width={40} height={40} />
      </div>
      <h1 className="text-md">{title}</h1>
      <p className="text-gray-400 text-sm">{descripe}</p>
    </div>
  );
};

const WhyChoose = () => {
  return (
    <section id="why-chose" className="mt-40">
      <div className="conatiner px-16 flex justify-between items-center gap-x-40">
        <div id="" className="flex flex-col gap-y-12 flex-1">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-3xl font-semibold">Why Choose Us</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam
              minus laudantium, ducimus rem officia? laudantium, ducimus rem
              officia?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 lg:text-start md:grid-col-1 md:text-center gap-8">
            {feachers.map(feacher => {
              return <Feacher feacher={feacher} key={feacher.id} />;
            })}
          </div>
        </div>
        <div id="div-imgs-section-why-we" className="">
          <img
            id="why-choose-us-img"
            src="/images/why-choose-us-img.jpg"
            alt=""
            className="rounded-md"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
