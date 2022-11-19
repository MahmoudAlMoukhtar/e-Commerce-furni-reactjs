import React from "react";
import Header from "../../common/Header";
import MainHeader from "../../components/MainHeader";
import {FiSend, FiPhoneCall} from "react-icons/fi";
import {MdOutlineEmail} from "react-icons/md";
const style = {
  color: "white",
  fontSize: "2.5em",
  backgroundColor: "#065717",
  paddingRight: "10px",
  paddingLeft: "10px",
  borderRadius: "4px",
};

const ContactPage = () => {
  return (
    <section id="contact-sec" className="flex flex-col justify-between gap-8">
      <Header>
        <MainHeader title={"Contact Us"} />
      </Header>
      <div
        id="bolgs-container"
        className="contanier xl:px-64 lg:px-40 sm:px-40 flex flex-col justify-between gap-y-20"
      >
        <div
          id="info-contant"
          className="flex justify-center items-center gap-x-6"
        >
          <div className="flex items-center gap-x-4 w-64">
            <FiSend style={style} />
            <p>43 Raymouth Rd. Baltemoer, London 3910</p>
          </div>
          <div className="flex items-center gap-x-4 w-64">
            <MdOutlineEmail style={style} />
            <p>info@yourdomain.com</p>
          </div>
          <div className="flex items-center gap-x-2 w-64">
            <FiPhoneCall style={style} />
            <p>+1 294 3925 3939</p>
          </div>
        </div>
        <form
          action=""
          className="flex flex-col justify-center items-center gap-y-8"
        >
          <div className="flex justify-between gap-x-6">
            <label
              for="name"
              className="text-gray-400 font-semibold flex flex-col"
            >
              First Name
              <input
                type="text"
                name="name"
                id="name"
                className="border-2  px-4 py-2 rounded-lg w-96"
              />
            </label>
            <label
              for="name"
              className="text-gray-400 font-semibold flex flex-col"
            >
              Last Name
              <input
                type="text"
                name="name"
                id="name"
                className="border-2  px-4 py-2 rounded-lg w-96"
              />
            </label>
          </div>
          <label for="email" className="text-gray-400 font-semibold">
            Email
            <input
              type="email"
              name="email"
              id="email"
              className="border-2  px-4 py-2 rounded-lg w-96"
            />
          </label>
          <label for="message" className="text-gray-400 font-semibold">
            Message
            <textarea
              name=""
              id=""
              cols="100"
              rows="10"
              className="border-2"
            ></textarea>
          </label>
        </form>
      </div>
    </section>
  );
};
export default ContactPage;
