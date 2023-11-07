import React from "react";
import "../css/Base.css";
import Button from "../components/Button";

import INS from "../assets/svg/ins.svg";
import FB from "../assets/svg/fb.svg";
import TWITTER from "../assets/svg/twitter.svg";
import COPYRIGHT from "../assets/svg/copyright.svg";

const Footer_List_Item = [
  {
    title: "Company",
    items: [
      { name: "About us" },
      { name: "Team" },
      { name: "Careers" },
      { name: "Blog" },
    ],
  },
  {
    title: "Contact",
    items: [
      { name: "Help & Support" },
      { name: "Partner with us" },
      { name: "Ride with us" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms & Conditions" },
      { name: "Refund & Cancellation" },
      { name: "Privacy Policy" },
      { name: "Cookie Policy" },
    ],
  },
];

const Footer = () => {
  return (
    <section className=" bg-[#212121] flex flex-col w-full">
      <div className="flex lg:flex-row flex-col text-[#F5F5F5] px-[50px] gap-x-[100px] wrapper py-[80px]">
        <div className="flex flex-col md:flex-row items-start gap-[40px] justify-start w-full">
          {Footer_List_Item.map((item) => (
            <div
              key={item.title}
              className="flex flex-col text-[22px] w-[170px] font-secondaryFont font-bold"
            >
              {item.title}
              <div className="flex flex-col mt-[10px] md:mt-[40px]">
                {item.items.map((i) => (
                  <a
                    href="/"
                    key={i.name}
                    className="text-[#F5F5F5] text-[18px] font-secondaryFont font-normal"
                  >
                    {i.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-[30px] items-start ">
          <div>
            <h1 className="text-gray-100 text-[18px] font-secondaryFont font-bold">
              FOLLOW US
            </h1>
          </div>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/ttrinhthienn/">
              <img src={INS} alt="Ins"></img>
            </a>
            <a href="https://www.facebook.com/thien.luutrinh">
              <img src={FB} alt="Facebook"></img>
            </a>
            <a href="https://twitter.com/">
              <img src={TWITTER} alt="Twitter"></img>
            </a>
          </div>
          <div>
            <h1 className="text-gray-100 text-[18px] font-secondaryFont font-bold">
              Receive exclusive offers in your mailbox
            </h1>
          </div>
          <div className="flex flex-col items-center justify-start xl:flex-row gap-x-2">
            <input
              type="text"
              placeholder={"Enter your email"}
              className="input-form border-Color2 bg-[#424242] w-max h-[60px] rounded-[8px] p-4 font-primaryFont text-[18px] text-[#ADADAD]"
            ></input>
            <Button className="w-[133px] h-[60px] bg-[#F59500] text-[18px] font-bold font-secondaryFont text-white  hover:bg-[#FFAD2D] active:bg-[#F09303]">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-t-[2px] border-t-[#424242] ">
        <div className="flex items-center justify-center gap-1 py-[30px]">
          <h2 className="text-[#F5F5F5] font-primaryFont text-[15px]">
            All rights Reserved{" "}
          </h2>
          <img src={COPYRIGHT} alt="Copyright"></img>
          <h2 className="text-[#F5F5F5] font-primaryFont font-bold text-[15px]">
            Untitled,2023
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Footer;
