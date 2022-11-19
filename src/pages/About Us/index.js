import React, {useEffect, useState} from "react";
import Header from "../../common/Header";
import MainHeader from "../../components/MainHeader";
import Services from "../../components/Services";
import Testimonailas from "../../components/Testimonailas";
//import WhyChoose from "../../WhyChose";

const OurTeam = () => {
  const [ourTeam, setOurTeam] = useState([]);
  useEffect(() => {
    (async () => {
      await fetch("http://localhost:3001/ourTeam")
        .then(res => res.json())
        .then(jsonData => {
          console.log(jsonData);
          setOurTeam(jsonData);
        });
    })();
  }, []);

  const Employee = ({img, name, title, descripWork}) => {
    return (
      <div id="card-employ" className="flex flex-col gap-y-6 w-64">
        <img src={img} alt="" className="" width={300} height={300} />
        <a href="#home">
          <h2 className="text-3xl font-normal underline text-gray-800">
            {name}
          </h2>
        </a>
        <p className="text-gray-500">{title}</p>
        <p className="text-gray-500">{descripWork}</p>
        <a href="#home" className="underline font-medium text-gray-800">
          Learn More
        </a>
      </div>
    );
  };

  return (
    <section id="ourTeam" className="mt-40">
      <div className="contanier px-16 flex flex-col justify-center gap-y-20">
        <h1 className="text-3xl font-semibold text-center">Our Team</h1>
        <div
          id="cards-team"
          className=" flex flex-wrap justify-center items-center gap-x-8"
        >
          {ourTeam.map(employee => {
            return <Employee {...employee} key={employee.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <React.Fragment>
      <Header>
        <MainHeader title="About Us" />
      </Header>
      ;
      <div className="flex flex-col justify-center items-center">
        <OurTeam />
        <Services />
        <Testimonailas />
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
